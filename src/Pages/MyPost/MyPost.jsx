import { Helmet } from "react-helmet";
import PostDetails from "./PostDetails";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useState } from "react";

const MyPost = () => {
  
  const {user} = useContext(AuthContext)
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:4000/jobs?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setPosts(data))
  },[user?.email])


  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Freelance BD || Add Post</title>
      </Helmet>
      <h1>My Post</h1>
      <div className="grid md:grid-cols-2 gap-5 my-20 grid-cols-1">
        {posts.map((post) => (
          <PostDetails post={post} key={post._id}></PostDetails>
        ))}
      </div>
    </div>
  );
};

export default MyPost;
