import React, { useState } from "react";
import Editor from "../components/editor";
import PostForm from "../components/postForm";


function CreatePost() {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [body,setBody] = useState("");
    const [date,setDate] = useState(new Date());
    const [thumbnail, setThumbnail] = useState("");

    const handleTitleChange = (val)=>setTitle;
    const handleDescriptionChange = (val)=>setDescription;
    const handleBodyChange = (val)=>setBody;
    const handleThumbnailChange = (val)=>setThumbnail;

  return (
    <div>
      <div>
        <h3 className="p-2 mt-3 text-center title-text">Create New Post</h3>
      </div>
      <div>
          <PostForm  />
      </div>
      <div>
        <Editor />
      </div>
      <div className="p-4">
          <button type="submit" className="btn btn-success">
              Create Post
            </button>
      </div>
    </div>
  );
}

export default CreatePost;
