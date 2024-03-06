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