import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPost, updatePost } from "../api/Posts";

const EditPost = () => {
  const queryClient = useQueryClient();

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

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      navigate("/");
    }
  });

  if (isLoading) return "...Loading";
  if (isError) return `Error Hain: ${error.message}`;
  // console.log("post", post);


  const handleSubmit = ( updatedPost) => {
    updatePostMutation.mutate({updatedPost, id});
    console.log(updatedPost);
  }

  return (
    <div>
      <h1>EditPost</h1>
      <PostForm initialValue={post} onSubmit={handleSubmit}/>
    </div>
  );
};

export default EditPost;
