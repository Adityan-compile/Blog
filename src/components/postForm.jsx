import React, { useState } from "react";

function PostForm(props) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
  return (
    <div className="p-4">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control shadow-lg"
            placeholder="How To Learn Programming"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Short Description
          </label>
          <textarea
            className="form-control shadow-lg"
            placeholder="Start Writing..."
            id="description"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
