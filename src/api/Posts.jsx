// For multiple posts
export const fetchPosts = async () => {
  const response = await fetch("http://localhost:3000/posts");
  return response.json();
};
// For single Post
export const fetchPost = async (id) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  return response.json();
};
// For creating Post
export const createPost = async (newPost) => {
  const response = await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json" 
    },
    body: JSON.stringify(newPost)
  });
  return response.json();
};
export const updatePost = async ({updatedPost, id}) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    headers: { 
      "Content-Type": "application/json" 
    },
    body: JSON.stringify(updatedPost)
  });
  return response.json();
};
export const deletePost = async (id) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
