const Table = () => {
  return (
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
  );
};

export default Table;
