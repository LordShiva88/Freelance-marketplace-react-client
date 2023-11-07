import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import icon from "../../assets/Image/user.png";

const JobCard = ({ job }) => {
  const {
    deadline,
    description,
    job_title,
    maximum_price,
    minimum_price,
    user_image,
    user_name,
    _id,
  } = job;

  return (
    <div className="grid grid-cols-12 gap-4 mx-2 mt-10 max-w-screen-md  p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div className="md:col-span-9 col-span-12">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
          {job_title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2 text-gray-700 font-semibold">
              Price Range:
            </span>
            <span className="rounded-full bg-green-200 px-3 py-1 text-green-900">
              {minimum_price}$ - {maximum_price}$
            </span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-700 font-semibold">Deadline:</span>
            <span className="rounded-full bg-blue-200 px-3 py-1 text-blue-900">
              {deadline}
            </span>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 col-span-12 flex items-center md:flex-col">
        <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-md mr-4 md:mr-0 mb-4 md:mb-2">
          {user_image ? (
            <img
              src={user_image}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <img src={icon} alt="" className="h-full w-full object-cover" />
          )}
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-900 text-center">
            {user_name}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full focus:outline-none transition duration-300 mt-2 btn btn-sm ">
            <Link to={`/details/${_id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobCard;
