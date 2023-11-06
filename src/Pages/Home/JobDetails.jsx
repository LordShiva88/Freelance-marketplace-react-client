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

  const {
    description,
    job_title,
    email,
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
    };

    axios.post('http://localhost:4000/bids', bids)
    .then(function (response) {
      console.log(response.data);
      if(response.data.insertedId){
        toast.success('Your Bid Successful!');
        navigate('/bids')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
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
              min={minDate}
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
              value={email}
              readOnly
              required
            />
          </div>

          <button
            type="submit"
            className={
              userEmail === email
                ? "bg-green-500 text-white py-2 px-4 rounded cursor-not-allowed opacity-50 w-full"
                : "bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            }
            
          >
            Bid on the Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;
