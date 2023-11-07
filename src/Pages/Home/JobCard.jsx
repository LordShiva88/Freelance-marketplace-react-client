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
    <div className="project-card group mx-2 mt-10 grid max-w-screen-md grid-cols-12 gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div className="col-span-12 md:col-span-10 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:pr-8 text-left mb-4 md:mb-0">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
            {job_title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {description?.slice(0, 150)}...
          </p>
          <div className="flex items-center space-x-2">
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
        <div>
          <div className="col-span-12 md:col-span-2 flex items-center justify-center md:justify-start">
            <div>
              <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-md">
                {user_image ? (
                  <img
                    src={user_image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={icon}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <p>{user_name}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none transition duration-300">
              <Link to={`/details/${_id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobCard;
