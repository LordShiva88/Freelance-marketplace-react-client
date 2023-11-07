import { Helmet } from "react-helmet";
import BidDetails from "./BidDetails";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const MyBids = () => {
  const [bids, setBids] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/bids?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [user?.email]);

  const handleComplete = (id) => {
    const status = {
      status: "Complete",
    };
    axios
      .put(`http://localhost:4000/bids/${id}`, status)
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

  return (
    <div className="container mx-auto py-8">
    <Helmet>
      <title>Freelance BD || My Bids </title>
    </Helmet>
    <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
      My Bids
    </h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-blue-50 dark:bg-blue-800">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">
              Job Title
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">
              Email Client
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">
              Deadline
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">
              Status
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase">
              Action
            </th>
          </tr>
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
  </div>
  );
};

export default MyBids;
