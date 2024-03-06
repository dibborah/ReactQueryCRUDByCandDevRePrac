import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../api/Posts";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    data: post,
    isError,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id),
  });

  // Remember the loading state is important to be used or else error will be throw as it takes some time to fetch data
  // So without the loading state if post state is found empty error may be thrown

  // #Note : Optional chaining and the isLoading state is a double check for handling error
  if (isLoading) return "...Loading";
  console.log("post", post);
  if (isError) return `Error Hain: ${error.message}`;
  return (
    <div>
    <button onClick={() => navigate('/')}>back to the home page</button>
      <h2>{post?.title}</h2>
      <h3>{post?.body}</h3>
    </div>
  );
};

export default Post;
