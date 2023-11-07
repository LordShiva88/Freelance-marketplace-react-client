import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
const PostDetails = ({ post }) => {
  const {
    category,
    deadline,
    description,
    job_title,
    maximum_price,
    minimum_price,
    _id,
  } = post;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const response = axios.delete(`http://localhost:4000/jobs/${id}`);
        console.log(response.data);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="border shadow-xl transition duration-300 ease-in-out transform hover:scale-105 bg-white rounded-lg p-6">
      <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
        <h3 className="text-sm text-gray-600">{category}</h3>
        <Link
          to={`#`}
          className="mb-3 overflow-hidden text-lg font-semibold sm:text-xl text-blue-500 hover:underline"
        >
          {job_title}
        </Link>
        <p className="text-sm text-gray-700">{description}...</p>

        <div className="mt-5 flex flex-col md:flex-row md:items-center space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
          <div className="flex items-center">
            <span className="mr-1">Price Range:</span>
            <span className="rounded-full bg-green-100 px-2 py-1 text-green-900">
              {minimum_price}$ - {maximum_price}$
            </span>
          </div>
          <div className="flex items-center mt-3 md:mt-0">
            <span className="mr-1">Deadline:</span>
            <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-900">
              {deadline}
            </span>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-between px-6 py-5">
        <Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-white text-blue-500  font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100"
          >
            Delete
          </button>
        </Link>
        <Link to={`/update/${post._id}`}>
          <button className="bg-white  text-blue-500  font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

PostDetails.propTypes = {
  post: PropTypes.object,
};
export default PostDetails;
