import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AddPost from "../components/AddPost";
import { useNavigate } from "react-router-dom";
import { deletePost, fetchPosts } from "../api/Posts";

const PostList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    isLoading,
    isError,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  });
  // console.log("posts", posts);

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      navigate("/");
    }
  });

  const handleDeletePost = (id) => {
    deletePostMutation.mutate(id);
  }

  if (isLoading) return "...Loading";
  if (isError) return `Error : ${error.message}`;

  return (
    <div>
      <AddPost />
      {posts &&
        posts.map((post) => (
          <div key={post.id} style={{ background: "#777" }}>
            <h4
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/post/${post.id}`)}
            >
              {post.title}
            </h4>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/post/${post.id}/edit`)}
            >
              Edit
            </button>
            <button onClick={ () => handleDeletePost(post.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default PostList;
