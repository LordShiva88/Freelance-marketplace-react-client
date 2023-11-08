import { Helmet } from "react-helmet";
import PostDetails from "./PostDetails";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import empty from "../../assets/Image/empty.png";
import { useState } from "react";
import PageBanner from "../../Components/SocialLogin/PageBanner/PageBanner";
import { Link } from "react-router-dom";

const MyPost = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://freelance-marketplace-server.vercel.app/jobs?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    );
  }

  return (
    <div className="">
      <Helmet>
        <title>Freelance BD || Add Post</title>
      </Helmet>
      <div className="relative bg-blue-500 mb-8 overflow-hidden group">
        <PageBanner></PageBanner>
        <div className="relative z-10 md:p-12 lg:p-16 text-white container mx-auto transform transition-transform duration-300 ease-in-out group-hover:scale-105 p-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
            My Posted Jobs
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Here Is Your Total Posted Jobs, you can edit and delete post!!
          </p>
          <p className="text-lg md:text-xl mb-8">
            Home &gt;&gt; My Posted Jobs
          </p>
          <button className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out">
            Explore More
          </button>
        </div>
      </div>
      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full py-10">
          <img
            src={empty}
            alt="No jobs available illustration"
            className="mb-6"
          />
          <p className="text-gray-600 text-lg mb-4">
            Oops! It looks like there are no job positions available at the
            moment.
          </p>
          <Link
            to={"/"}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full focus:outline-none transition duration-300"
          >
            Explore Jobs
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5 my-20 grid-cols-1 container mx-auto ">
          {posts.map((post) => (
            <PostDetails
              setPosts={setPosts}
              posts={posts}
              post={post}
              key={post._id}
            ></PostDetails>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPost;
