import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const JobCard = ({ job }) => {
  const {
    category,
    deadline,
    description,
    job_title,
    job_type,
    price_range,
    user_image,
    user_name,
    _id
  } = job;

  // https://ibb.co/Ksdknhk/user1.jpg
// https://ibb.co/9yL8jzr/user2.jpg
// https://ibb.co/VC8CCwL/user3.jpg
// https://ibb.co/jRycByv/user4.jpg
// https://ibb.co/7GNtnrZ/user4.jpg
// https://ibb.co/Mg32gjZ/user5.jpg

  
  return (
    <div className="m-5">
      <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
        <a
          href="#"
          className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
        >
          <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
            <img
              src={user_image}
              alt=""
              className="h-full w-full object-cover text-gray-700"
            />
          </div>
          <p>{user_name}</p>
          
          <button className="btn"><Link to={`/details/${_id}`}>Bid Now</Link></button>
        </a>

        <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
          <h3 className="text-sm text-gray-600">{category}</h3>
          <a
            href="#"
            className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
          >
            {job_title}
          </a>
          <p className="overflow-hidden pr-7 text-sm">
            {description.slice(0, 150)}...
          </p>

          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div className="">
              Price Range
              <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                {" "}
                {price_range}{" "}
              </span>
            </div>
            <div className="">
              Dateline:
              <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                {deadline}
              </span>
            </div>
            <div className="">
              Job_Types:
              <span className="ml-2 mr-3 rounded-full bg-red-100 px-2 py-0.5 text-blue-900">
                {job_type}
              </span>
            </div>
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
