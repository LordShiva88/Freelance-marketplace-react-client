import { Helmet } from "react-helmet";
import BidDetails from "./BidDetails";
import empty from "../../assets/Image/empty.png";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import Table from "../../Components/Table";
import PageBanner from "../../Components/SocialLogin/PageBanner/PageBanner";
import { Link } from "react-router-dom";

const MyBids = () => {
  const [bids, setBids] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://freelance-marketplace-server.vercel.app/bids?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
        setLoading(false)
      });
  }, [user?.email]);

  const handleComplete = (id) => {
    const status = {
      status: "Complete",
    };
    axios
      .put(`https://freelance-marketplace-server.vercel.app/bids/${id}`, status)
      .then(function (response) {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          toast.success("Completed!!");
          const remaining = bids.filter((bid) => bid._id !== id);
          const update = bids.find((bid) => bid._id === id);
          update.status = "Complete";
          const newBids = [update, ...remaining];
          setBids(newBids);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if(loading){
    return <div className="flex justify-center items-center h-screen">
    <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
  </div>
  }

  return (
    <div className="">
      <Helmet>
        <title>Freelance BD || My Bids </title>
      </Helmet>
      <div className="relative bg-blue-500 mb-8 overflow-hidden group">
        <PageBanner />
        <div className="relative z-10 md:p-12 lg:p-16 text-white container mx-auto transform transition-transform duration-300 ease-in-out group-hover:scale-105">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
            Your Total Bids From other posted job!
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Check your active bids, update statuses, and manage your projects
            here.
          </p>
          <p className="text-lg md:text-xl mb-8">Home &gt;&gt; My Bids</p>
          <button className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out">
            Explore More
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
            Oops! It looks like there are no job positions available at the
            moment.
          </p>
          <Link
            to={"/"}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full focus:outline-none transition duration-300"
          >
            Explore Jobs
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto container mx-auto my-20">
          <table className="min-w-full bg-white border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-blue-50 dark:bg-blue-800">
              <Table />
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {bids.map((bid) => (
                <BidDetails
                  bid={bid}
                  handleComplete={handleComplete}
                  key={bid._id}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBids;
