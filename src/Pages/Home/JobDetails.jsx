import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import PageBanner from "../../Components/SocialLogin/PageBanner/PageBanner";
import { Helmet } from "react-helmet";

const JobDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const job = useLoaderData();

  const [bidPrice, setBidPrice] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  if (loading) {
    return;
  }
  const userEmail = user?.email;

  const {
    description,
    job_title,
    email,
    deadline,
    maximum_price,
    minimum_price,
    user_image,
    user_name,
  } = job;

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };
  const minDate = getCurrentDate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bids = {
      userEmail,
      email,
      bidPrice,
      date,
      job_title,
      status: "pending",
    };

    axios
      .post("http://localhost:4000/bids", bids)
      .then(function (response) {
        if (response.data.insertedId) {
          toast.success("Your Bid Successful!");
          navigate("/bids");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>Freelance BD || Place Bid </title>
      </Helmet>
      <div className="relative bg-blue-500 mb-8 overflow-hidden group p-10 md:p-0">
        <PageBanner></PageBanner>
        <div className="relative z-10 md:p-12 lg:p-16 text-white container mx-auto transform transition-transform duration-300 ease-in-out group-hover:scale-105">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
            Bid Now
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Bid On this project right now, biggest opportunity waiting for you!!
          </p>
          <p className="text-lg md:text-xl mb-8">Home &gt;&gt; Bid</p>
          <button className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out">
            Explore More
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  container mx-auto my-20">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">{job_title}</h2>
          <p className="text-gray-700 mb-6">{description}</p>
          <div className="flex flex-wrap items-center space-y-2">
            <div className="flex items-center mb-2">
              <span className="mr-2 font-semibold">Price Range:</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-green-900">
                {minimum_price}$ - {maximum_price}$
              </span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2 font-semibold">Deadline:</span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-900">
                {deadline}
              </span>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <img
              src={user_image}
              alt=""
              className="w-10 h-10 rounded-full mr-3"
            />
            <p className="text-sm text-gray-700">{user_name}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg shadow-lg bg-white"
        >
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Your Bidding Amount ($):
            </label>
            <input
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              type="number"
              onChange={(e) => setBidPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Deadline:
            </label>
            <input
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              min={minDate}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Your Email:
            </label>
            <input
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              type="email"
              value={userEmail}
              readOnly
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Buyers Email:
            </label>
            <input
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              type="email"
              value={email}
              readOnly
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            disabled={userEmail === email}
          >
            Bid on the Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;
