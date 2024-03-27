/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PostForm = ({onSubmit, initialValue}) => {
  const [post, setPost] = useState({
    title: initialValue?.title || "",
    body: initialValue?.body || "",
  });
  const handleInputChange = (e) => {
    setPost({
        ...post,
        [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(post);
    onSubmit(post);
    setPost({
        title: "",
        body: ""
    })
  }
  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]} onChange={(e) => handleInputChange(e)}/>
    </div>
  );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderField("Title")}
        {renderField("Body")}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
