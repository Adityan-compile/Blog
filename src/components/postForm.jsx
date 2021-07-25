import React, { useState } from "react";

function PostForm({ functions }) {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  // console.info(functions)
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
            required
            aria-required="true"
            onChange={(e) => functions.handleTitleChange(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Short Description
          </label>
          <textarea
            className="form-control shadow-lg"
            placeholder="Start Writing..."
            minLength="20"
            maxLength="40"
            id="description"
            aria-required="true"
            required
            onChange={(e) => functions.handleDescriptionChange(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail
          </label>
          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control"
                required
                aris-required="true"
                type="file"
                id="thumbnail"
                accept="image/*"
                onChange={(e) => {
                  setThumbnail(e.target.files[0]);
                  functions.handleThumbnailChange(e.target.files[0]);
                }}
                aria-describedby="fileHelp"
              />
              <div id="fileHelp" className="form-text">
                Make Sure to Upload High Resolution Rectangular Images For
                Maximum Quality.
              </div>
            </div>
            <div className="col-md-6 p-2">
              <img
                src={thumbnail ? URL.createObjectURL(thumbnail) : ""}
                alt=""
                className="img-thumbnail img-fluid"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
