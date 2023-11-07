import ProgressBar from "@ramonak/react-progress-bar";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
const MyRequestDetails = ({ bid, handleAccept, handleReject }) => {
  const { job_title, userEmail, date, _id, status } = bid;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === "Canceled") {
      setProgress(0);
    }
    if (status === "In Progress") {
      setProgress(50);
    }
    if (status === "Complete") {
      setProgress(100);
    }
  }, [status]);

  return (
    <>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
          {job_title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
          {userEmail}
          <p>Dateline: {date}</p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
          <ProgressBar completed={`${progress}`} />
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a className="text-red-500 hover:text-red-400" href="#">
            {status}
          </a>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleAccept(_id)}
              className={`text-blue-500 hover:text-blue-700 btn btn-sm`}
              disabled={status !== "pending"}
            >
              Accept
            </button>
            <button
              onClick={() => handleReject(_id)}
              className={`text-blue-500 hover:text-blue-700 btn btn-sm`}
              disabled={status !== "pending"}
            >
              Reject
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

MyRequestDetails.propTypes = {
  bid: PropTypes.object,
  handleAccept: PropTypes.func,
  handleReject: PropTypes.func,
};
export default MyRequestDetails;
