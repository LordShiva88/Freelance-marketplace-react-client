import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [job_title, setJobTitle] = useState("");
  const [maximum_price, setMax] = useState("");
  const [minimum_price, setMin] = useState("");
  const [deadline, setDateline] = useState("");

  const email = user.email;
  const user_image = user.photoURL;
  const user_name = user.displayName;

  const navigate = useNavigate();


  // Date Validation
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };
  const minDate = getCurrentDate();




  const handleSubmit = (e) => {
    e.preventDefault();
    const job = {
      category,
      deadline,
      description,
      job_title,
      maximum_price,
      minimum_price,
      email,
      user_image,
      user_name,
    };
    axios
      .post("http://localhost:4000/jobs", job)
      .then(function (response) {
        console.log(response.data);
        if(response.data.insertedId){
          toast.success('Successfully Post this Job!');
          navigate('/post')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="bg-gray-100 flex justify-center items-center">
      <Helmet>
        <title>Freelance BD || Add job</title>
      </Helmet>
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2">
        <h1 className="text-3xl font-semibold mb-6 text-green-500 text-center">
          Add a Job
        </h1>
        <form onSubmit={handleSubmit} id="addJobForm" className="space-y-4">
          <div className="flex gap-5 md:flex-row flex-col">
            <div className="flex flex-col w-full">
              <label className="text-gray-600 mb-2 font-semibold">
                Email of the employer
              </label>
              <input
                type="text"
                defaultValue={email}
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
                onChange={(e) => setJobTitle(e.target.value)}
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
                name="deadline"
                onChange={(e) => setDateline(e.target.value)}
                min={minDate}
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
                onChange={(e) => setCategory(e.target.value)}
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
              onChange={(e) => setMin(e.target.value)}
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
              onChange={(e) => setMax(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded font-semibold w-full"
          >
            Add Job
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddJob;
