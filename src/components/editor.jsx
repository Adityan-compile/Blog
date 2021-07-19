import React, { Fragment, useState } from "react";
import MDEditor from "@uiw/react-md-editor";


function Editor({ Handler }) {
  const [text, setText] = useState("");
  const handler= (val) => {
    Handler(val);
    setText(val);
  };

  return (
    <Fragment>
      <div className="p-4 shadow-lg">
        <label htmlFor="editor" className="form-label">Content</label>
        <MDEditor value={text} onChange={handler} id="editor" />
      </div>
    </Fragment>
  );
}

export default Editor;
