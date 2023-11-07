import axios from "../../Hooks/Axios";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Jobs from "./Jobs";
import Success from "../../Components/SocialLogin/Success";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleGetData = async (category) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/jobs?category=${category || ""}`
      );
      setJobs(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Freelance BD || Home</title>
      </Helmet>
      <h1>this is home</h1>
      <Tabs>
        <TabList>
          <div className="flex justify-center">
            <Tab>
              <button
                onClick={() => handleGetData("")}
                className="tab tab-bordered"
              >
                All Jobs
              </button>
            </Tab>
            <Tab>
              <button
                onClick={() => handleGetData("Web_Design")}
                className="tab tab-bordered"
              >
                Web Design
              </button>
            </Tab>
            <Tab>
              <button
                onClick={() => handleGetData("Digital_Marketing")}
                className="tab tab-bordered"
              >
                Digital Marketing
              </button>
            </Tab>
            <Tab>
              <button
                onClick={() => handleGetData("Graphics_Design")}
                className="tab tab-bordered"
              >
                Graphic Design
              </button>
            </Tab>
          </div>
        </TabList>
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
<Success></Success>
</div>
      
    </div>
  );
};

export default Home;
