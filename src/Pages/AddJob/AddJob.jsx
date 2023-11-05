import { Helmet } from "react-helmet";

const AddJob = () => {

  

  return (
    <section className="bg-gray-100 flex justify-center items-center">
      <Helmet>
        <title>Freelance BD || Add job</title>
      </Helmet>
    <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2">
      <h1 className="text-3xl font-semibold mb-6 text-green-500 text-center">Add a Job</h1>
      <form id="addJobForm" className="space-y-4">
        <div className="flex gap-5 md:flex-row flex-col">
          <div className="flex flex-col w-full">
            <label className="text-gray-600 mb-2 font-semibold">Email of the employer</label>
            <input
              type="text"
              id="email"
              name="email"
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-gray-600 mb-2 font-semibold">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className="border p-2 rounded"
            />
          </div>
        </div>
        <div className="flex gap-5 md:flex-row flex-col">
        <div className="flex flex-col w-full">
          <label className="text-gray-600 mb-2 font-semibold">Deadline</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-600 mb-2 font-semibold">Category</label>
          <select
            id="category"
            name="category"
            className="border p-2 rounded"
          >
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
        </div>
        
        <div className="flex flex-col w-full">
          <label className="text-gray-600 mb-2 font-semibold">Minimum Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-600 mb-2 font-semibold">Maximum Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-600 mb-2 font-semibold">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4" // Set the number of rows for the textarea
            className="border p-2 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded font-semibold"
        >
          Add Job
        </button>
      </form>
    </div>
  </section>
  );
};

export default AddJob;
