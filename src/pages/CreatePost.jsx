import React, { useState } from "react";
import Editor from "../components/editor";
import PostForm from "../components/postForm";


function CreatePost() {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [body,setBody] = useState("");
    const date = new Date().toLocaleDateString('en-IN');
    const [thumbnail, setThumbnail] = useState("");

    const handleTitleChange = setTitle;
    const handleDescriptionChange = setDescription;
    const handleThumbnailChange = setThumbnail;
    const handleBodyChange = setBody;

    console.log({ title, body, date, thumbnail, description })

  return (
    <div>
      <div>
        <h3 className="p-2 mt-3 text-center title-text">Create New Post</h3>
      </div>
      <div>
          <PostForm functions={{handleTitleChange, handleDescriptionChange, handleThumbnailChange}} />
      </div>
      <div>
        <Editor id="editor" Handler={handleBodyChange} />
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
