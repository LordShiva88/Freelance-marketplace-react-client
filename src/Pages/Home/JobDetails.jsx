import { useContext, useState } from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
// import { data } from "autoprefixer";

const JobDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const job = useLoaderData();

  const [buyerEmail, setBuyerEmail] = useState("");
  const [bidPrice, setBidPrice] = useState("");
  const [date, setDate] = useState("");

  if (loading) {
    return;
  }
  const userEmail = user.email;

  const {
    category,
    deadline,
    description,
    job_title,
    job_type,
    price_range,
    user_image,
    user_name,
    _id,
    email
  } = job;

  const handleSubmit = (e) => {
    e.preventDefault();
    const bids = {
      userEmail,
      email,
      bidPrice,
      date,
    };
    
  };

  return (
    <div className="my-10 container mx-auto">
      <h1>Job Details</h1>
      <div>
        <p>{job_title}</p>
        <p>Description: {description}</p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price (your bidding amount):
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              // value={}
              onChange={(e) => setBidPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="deadline"
            >
              Deadline:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="email"
              value={userEmail}
              readOnly
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Buyer Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="buyerEmail"
              type="email"
              // value={'freelance@gmail.com'}
              value={email}
              readOnly
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Bid on the Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;
