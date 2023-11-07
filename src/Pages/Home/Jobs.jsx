import JobCard from "./JobCard";
import PropTypes from "prop-types";

const Jobs = ({ jobs, loading }) => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-5 container mx-auto">
      {loading && (
        <div className="flex justify-center my-20">
          <div className="loading loading-spinner loading-lg "></div>
        </div>
      )}

      {jobs.map((job) => (
        <JobCard key={job._id} job={job}></JobCard>
      ))}
    </div>
  );
};

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default Jobs;
