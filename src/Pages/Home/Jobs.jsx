import JobCard from "./JobCard";

const Jobs = ({ jobs, loading }) => {
  console.log(jobs);

  return (
    <div>
      {loading && (
        <div className="flex justify-center my-20">
          <div className="loading loading-spinner loading-lg "></div>
        </div>
      )}

      {jobs.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
    </div>
  );
};

export default Jobs;
