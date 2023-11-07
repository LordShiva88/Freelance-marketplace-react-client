import PropTypes from "prop-types";
const BidDetails = ({ bid, handleComplete }) => {
  const { job_title, email, date, bidPrice, status, _id } = bid;

  return (
    <>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
          {job_title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
          {email}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
          <p className="text-gray-500">{date}</p>
          <p className="text-green-500 font-semibold">Price: ${bidPrice}</p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <span
            className={`${
              status === "In Progress" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right">
          <button
            onClick={() => handleComplete(_id)}
            className={`${
              status === "In Progress"
                ? "text-blue-500 hover:text-blue-700 cursor-pointer"
                : "text-gray-400 cursor-not-allowed"
            }`}
            disabled={status !== "In Progress"}
          >
            Complete
          </button>
        </td>
      </tr>
    </>
  );
};
BidDetails.propTypes = {
  bid: PropTypes.object,
  handleComplete: PropTypes.func,
};
export default BidDetails;
