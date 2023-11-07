import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

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

  const { description, job_title, email } = job;

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
        console.log(response.data);
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
    // <div className="my-10 container mx-auto">
    //   <h1>Job Details</h1>
    //   <div>
    //     <p>{job_title}</p>
    //     <p>Description: {description}</p>
    //   </div>
    //   <div>
    //     <form
    //       onSubmit={handleSubmit}
    //       className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg"
    //     >
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //           htmlFor="price"
    //         >
    //           Price (your bidding amount):
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="price"
    //           type="number"
    //           onChange={(e) => setBidPrice(e.target.value)}
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //           htmlFor="deadline"
    //         >
    //           Deadline:
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           type="date"
    //           onChange={(e) => setDate(e.target.value)}
    //           min={minDate}
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2">
    //           Email :
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="price"
    //           type="email"
    //           value={userEmail}
    //           readOnly
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2">
    //           Buyer Email:
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="buyerEmail"
    //           type="email"
    //           value={email}
    //           readOnly
    //           required
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         className={
    //           userEmail === email
    //             ? "bg-green-500 text-white py-2 px-4 rounded cursor-not-allowed opacity-50 w-full"
    //             : "bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
    //         }

    //       >
    //         Bid on the Project
    //       </button>
    //     </form>
    //   </div>
    // </div>
<div className="my-10 container mx-auto">
  <h1 className="text-3xl font-bold mb-6 text-center">Job Details</h1>
  <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
    <p className="text-2xl font-semibold mb-4">{job_title}</p>
    <p className="text-gray-700 mb-6">Description: {description}</p>

    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="price">
          Your Bidding Amount ($):
        </label>
        <input
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          id="price"
          type="number"
          onChange={(e) => setBidPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="deadline">
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
      <div className="mb-6">
        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
          Your Email:
        </label>
        <input
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          id="email"
          type="email"
          value={userEmail}
          readOnly
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="buyerEmail">
          Buyers Email:
        </label>
        <input
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          id="buyerEmail"
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
