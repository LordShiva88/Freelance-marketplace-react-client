import { Helmet } from "react-helmet";
import MyRequestDetails from "./MyRequestDetails";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const MyRequest = () => {
  const [bids, setBids] = useState([]);
  // const [state, setState] = useState('Pending')
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/bids/request?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [user?.email]);

  const handleAccept = (id)=>{
    const status = {
      status: 'In Progress'
    }
    axios
      .put(`http://localhost:4000/bids/${id}`, status)
      .then(function (response) {
        console.log(response.data)
        if(response.data.modifiedCount > 0){
          toast.success('Accepted Successful')
          const remaining = bids.filter(bid => bid._id !== id);
          const update = bids.find(bid => bid._id === id)
          update.status = 'In Progress'
          const newBids = [update, ...remaining]
          setBids(newBids)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleReject = (id)=>{
    const status = {
      status: 'Canceled'
    }
    axios
      .put(`http://localhost:4000/bids/${id}`, status)
      .then(function (response) {
        console.log(response.data)
        if(response.data.modifiedCount > 0){
          toast.error('Canceled')
          const remaining = bids.filter(bid => bid._id !== id);
          const update = bids.find(bid => bid._id === id)
          update.status = 'Canceled'
          const newBids = [update, ...remaining]
          setBids(newBids)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Freelance BD || My Request</title>
      </Helmet>
      <h1>My Request</h1>
      <div className="flex flex-col my-20">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Job title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Email Freelancer
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Progress
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {bids.map((bid) => (
                    <MyRequestDetails
                    handleAccept={handleAccept}
                      bid={bid}
                      key={bid._id}
                      // state={state}
                      handleReject={handleReject}
                    ></MyRequestDetails>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequest;
