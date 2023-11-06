const BidDetails = ({bid}) => {
  const {job_title, email, date, bidPrice} = bid;
  return (
    <>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
          {job_title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
          {email}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
          <p>
          {date}
          </p>
          <p>Price : ${bidPrice}</p>
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

export default BidDetails;
