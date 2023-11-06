import ProgressBar from "@ramonak/react-progress-bar";
import PropTypes from "prop-types";
import { useState } from "react";
const MyRequestDetails = ({ bid }) => {
  const { job_title, email, date } = bid;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
          {job_title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
          {email}
          <p>Dateline: {date}</p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
          <ProgressBar completed={`${progress}`} />
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a className="text-red-500 hover:text-red-400" href="#">
            Pending
          </a>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a className="text-blue-500 hover:text-blue-700" href="#">
            Complete
          </a>
        </td>
      </tr>
    </>
  );
};

MyRequestDetails.propTypes = {
  bid: PropTypes.object,
};
export default MyRequestDetails;
