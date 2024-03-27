import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostForm from "./PostForm";
import { createPost } from "../api/Posts";
import { v4 as uuidv4 } from 'uuid';

const AddPost = () => {
  const queryClient = useQueryClient()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      console.log('Success bro!!!');
    },
  });

  const handleAddPost = (post) => {
    createPostMutation.mutate({
      id: uuidv4(),
      ...post
    })
  };
  return (
    <div>
      <h1>Add new Post</h1>
      <PostForm onSubmit={handleAddPost} initialValue={{}}/>
    </div>
  );
};

export default AddPost;
