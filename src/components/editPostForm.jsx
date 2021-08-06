import React, { Fragment, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

function EditPostForm({ functions, data }) {
  const [text, setText] = useState("");

  const handler = (val) => {
    functions.setBody(val);
    setText(val);
  };

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
            defaultValue={data.title}
            required
            aria-required="true"
            onChange={(e) => functions.setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Short Description
          </label>
          <textarea
            className="form-control shadow-lg"
            placeholder="Start Writing..."
            defaultValue={data.shortDescription}
            minLength="20"
            maxLength="40"
            id="description"
            aria-required="true"
            required
            onChange={(e) => functions.setDescription(e.target.value)}
          ></textarea>
        </div>
        <Fragment>
          <div className="p-4 shadow-lg">
            <label htmlFor="editor" className="form-label">
              Content
            </label>
            <MDEditor
              value={
                text.length === 0 ? data.body : text
              }
              onChange={handler}
              id="editor"
            />
          </div>
        </Fragment>
      </form>
    </div>
  );
}

export default EditPostForm;
