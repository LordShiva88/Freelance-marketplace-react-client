import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Auth/AuthProvider";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

const Update = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const axios = useAxios()
  const id = data._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const deadline = e.target.deadline.value;
    const description = e.target.description.value;
    const job_title = e.target.jobTitle.value;
    const maximum_price = e.target.minPrice.value;
    const minimum_price = e.target.maxPrice.value;

    const job = {
      category,
      deadline,
      description,
      job_title,
      maximum_price,
      minimum_price,
      id,
    };
    console.log(job);

    axios
      .put(`/jobs/${id}`, job)
      .then(function (response) {
        if (response.data.modifiedCount > 0) {
          toast.success("Updated Successful");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="bg-gray-100 flex justify-center items-center">
      <Helmet>
        <title>Freelance BD || Update</title>
      </Helmet>
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2">
        <h1 className="text-3xl font-semibold mb-6 text-green-500 text-center">
          Update
        </h1>
        <form onSubmit={handleSubmit} id="Form" className="space-y-4">
          <div className="flex gap-5 md:flex-row flex-col">
            <div className="flex flex-col w-full">
              <label className="text-gray-600 mb-2 font-semibold">
                Email of the employer
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="border p-2 rounded"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-600 mb-2 font-semibold">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                defaultValue={data.job_title}
                className="border p-2 rounded"
              />
            </div>
          </div>
          <div className="flex gap-5 md:flex-row flex-col">
            <div className="flex flex-col w-full">
              <label className="text-gray-600 mb-2 font-semibold">
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                defaultValue={data.deadline}
                name="deadline"
                className="border p-2 rounded"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-600 mb-2 font-semibold">
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={data.category}
                className="border p-2 rounded"
              >
                <option value="Web_Design">Web_Design</option>
                <option value="Digital_Marketing">Digital_Marketing</option>
                <option value="Graphics_Design">Graphics_Design</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-gray-600 mb-2 font-semibold">
              Minimum Price
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              defaultValue={data.minimum_price}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-gray-600 mb-2 font-semibold">
              Maximum Price
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              defaultValue={data.maximum_price}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-gray-600 mb-2 font-semibold">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              defaultValue={data.description}
              className="border p-2 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded font-semibold w-full"
          >
            Update Job
          </button>
        </form>
      </div>
    </section>
  );
};

export default Update;
