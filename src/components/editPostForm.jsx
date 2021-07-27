import React, { useState } from "react";

function EditPostForm({ functions }) {
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
        </form>
      </div>
    );
}

export default EditPostForm;
