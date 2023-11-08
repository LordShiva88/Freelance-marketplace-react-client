import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Jobs from "./Jobs";
import Faq from "../../Components/Faq";
import Testimonials from "../../Components/Testimonials";
import HomeBanner from "../../Components/Home/HomeBanner";
import WhyUs from "../../Components/Home/WhyUs";
import useAxios from "../../Hooks/useAxios";
import { useEffect } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  const handleGetData = async (category) => {
    const res = await axios.get(`/jobs?category=${category || ""}`, {
      withCredentials: true,
    });
    setJobs(res.data);
    setLoading(false);
  };

  useEffect(()=>{
    handleGetData();
  },[])

  

  return (
    <div>
      <Helmet>
        <title>Freelance BD || Home</title>
      </Helmet>
      <div>
        <HomeBanner></HomeBanner>
      </div>
      <Tabs>
        <div className="flex flex-col sm:flex-row items-center justify-between container mx-auto">
          <div className="text-center my-8">
            <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-blue-700 mb-4">
              Explore Features Jobs For You
            </h1>
            <hr className="border w-32 h-2 bg-blue-700 mx-auto"></hr>
          </div>
          <div>
            <TabList>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Tab>
                  <button
                    onClick={() => handleGetData("")}
                    className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out"
                  >
                    All Jobs
                  </button>
                </Tab>
                <Tab>
                  <button
                    onClick={() => handleGetData("Web_Design")}
                    className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out"
                  >
                    Web Design
                  </button>
                </Tab>
                <Tab>
                  <button
                    onClick={() => handleGetData("Digital_Marketing")}
                    className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out"
                  >
                    Digital Marketing
                  </button>
                </Tab>
                <Tab>
                  <button
                    onClick={() => handleGetData("Graphics_Design")}
                    className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out"
                  >
                    Graphic Design
                  </button>
                </Tab>
              </div>
            </TabList>
          </div>
        </div>
        {/* <TabList>
          <div className="flex justify-center space-x-4">
            <Tab>
              <button
                onClick={() => handleGetData("")}
                className="tab tab-bordered hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                All Jobs
              </button>
            </Tab>
            <Tab>
              <button
                onClick={() => handleGetData("Web_Design")}
                className="tab tab-bordered hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Web Design
              </button>
            </Tab>
            <Tab>
              <button
                onClick={() => handleGetData("Digital_Marketing")}
                className="tab tab-bordered hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Digital Marketing
              </button>
            </Tab>
            <Tab>
              <button
                onClick={() => handleGetData("Graphics_Design")}
                className="tab tab-bordered hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Graphic Design
              </button>
            </Tab>
          </div>
        </TabList> */}
        <TabPanel>
          <Jobs jobs={jobs} loading={loading}></Jobs>
        </TabPanel>
        <TabPanel>
          <Jobs jobs={jobs}></Jobs>
        </TabPanel>
        <TabPanel>
          <Jobs jobs={jobs}></Jobs>
        </TabPanel>
        <TabPanel>
          <Jobs jobs={jobs}></Jobs>
        </TabPanel>
      </Tabs>
      <div className="flex justify-center my-10">
        <WhyUs></WhyUs>
      </div>

      <div className="flex justify-center my-10">
        <Faq></Faq>
      </div>
      <div className="flex justify-center my-10">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
