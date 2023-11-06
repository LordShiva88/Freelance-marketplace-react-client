import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PostDetails = ({post}) => {

  const {
    category,
    deadline,
    description,
    job_title,
    maximum_price,
    minimum_price,
    user_image,
    user_name,
    _id,
  } = post;

  const handleDelete = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const response = axios.delete(`http://localhost:4000/jobs/${id}`);
    console.log(response.data);
   
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className="border shadow-xl transition duration-300 ease-in-out transform hover:scale-104">
    <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
          <h3 className="text-sm text-gray-600">{category}</h3>
          <a
            href="#"
            className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
          >
            {job_title}
          </a>
          <p className="overflow-hidden pr-7 text-sm">
            {description}...
          </p>

          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div className="">
              Price Range
              <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                {" "}
                {minimum_price}$ - {maximum_price}${" "}
              </span>
            </div>
            <div className="">
              Dateline:
              <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                {deadline}
              </span>
            </div>
          </div>
        </div>
    <hr />
    <div className="flex justify-between px-6 py-5">
      <Link>
        <button onClick={()=> handleDelete(_id)} className="bg-white text-indigo-600 hover:text-indigo-700 font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Delete
        </button>
      </Link>
      <Link to={`/update/${post._id}`}>
        <button className="bg-white text-indigo-600 hover:text-indigo-700 font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Update
        </button>
      </Link>
    </div>
  </div>
  );
};

export default PostDetails;