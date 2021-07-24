import React, { Fragment, lazy, useState } from "react";
const MDEditor = lazy(()=>import("@uiw/react-md-editor"));

function Editor({ Handler }) {
  const [text, setText] = useState("");
  const handler = (val) => {
    Handler(val);
    setText(val);
  };

  return (
    <Fragment>
      <div className="p-4 shadow-lg">
        <label htmlFor="editor" className="form-label">
          Content
        </label>
        <MDEditor
          value={text}
          textareaProps={{ placeholder: "Write Your Post Content Here ..." }}
          onChange={handler}
          id="editor"
        />
      </div>
    </Fragment>
  );
}

export default Editor;
