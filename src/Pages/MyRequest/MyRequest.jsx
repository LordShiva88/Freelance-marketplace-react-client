import { Helmet } from "react-helmet";
import MyRequestDetails from "./MyRequestDetails";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import toast from "react-hot-toast";
import PageBanner from "../../Components/SocialLogin/PageBanner/PageBanner";
import Table from "../../Components/Table";
import empty from "../../assets/Image/empty.png";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";

const MyRequest = () => {
  const [bids, setBids] = useState([]);
  // const [state, setState] = useState('Pending')
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const axios = useAxios()

  useEffect(() => {
    const fetchData = async() =>{
      const res  = await axios.get(`/bids/request?email=${user?.email}`);
      setBids(res.data);
      setLoading(false);
    }
    fetchData()
  }, [user?.email, axios]);

  const handleAccept = (id) => {
    const status = {
      status: "In Progress",
    };
    axios
      .put(`/bids/${id}`, status)
      .then(function (response) {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          toast.success("Accepted Successful");
          const remaining = bids.filter((bid) => bid._id !== id);
          const update = bids.find((bid) => bid._id === id);
          update.status = "In Progress";
          const newBids = [update, ...remaining];
          setBids(newBids);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleReject = (id) => {
    const status = {
      status: "Canceled",
    };
    axios
      .put(`/bids/${id}`, status)
      .then(function (response) {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          toast.error("Canceled");
          const remaining = bids.filter((bid) => bid._id !== id);
          const update = bids.find((bid) => bid._id === id);
          update.status = "Canceled";
          const newBids = [update, ...remaining];
          setBids(newBids);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    );
  }

  return (
    <div className="">
      <Helmet>
        <title>Freelance BD || My Request</title>
      </Helmet>
      <div className="relative bg-blue-500 mb-8 overflow-hidden group">
        <PageBanner></PageBanner>
        <div className="relative z-10 md:p-12 lg:p-16 text-white container mx-auto transform transition-transform duration-300 ease-in-out group-hover:scale-105 p-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
            Welcome to My Bids Page!
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Check your active bids, update statuses, and manage your projects
            here.
          </p>
          <p className="text-lg md:text-xl mb-8">Home &gt;&gt; My Request</p>
          <button className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out">
            Explore Bids
          </button>
        </div>
      </div>

      {bids.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full py-10">
          <img
            src={empty}
            alt="No jobs available illustration"
            className="mb-6"
          />
          <p className="text-gray-600 text-lg mb-4">
            Oops! It looks like there are no one bids till now.
          </p>
          <Link
            to={"/addJob"}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full focus:outline-none transition duration-300"
          >
            Add New Job
          </Link>
        </div>
      ) : (
        <div className="flex flex-col my-20 container mx-auto">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <Table></Table>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {bids.map((bid) => (
                      <MyRequestDetails
                        handleAccept={handleAccept}
                        bid={bid}
                        key={bid._id}
                        handleReject={handleReject}
                      ></MyRequestDetails>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRequest;
