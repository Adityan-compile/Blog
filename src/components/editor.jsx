import React, { Fragment, useState } from "react";
import sanitizeHtml from 'sanitize-html';
import MDEditor from "@uiw/react-md-editor";
import marked from "marked";

function Editor({ Handler }) {
  const [text, setText] = useState("");
  const handler= (val) => {
    let parsed = marked(val)
    let sanitized = sanitizeHtml(parsed);
    Handler(sanitized);
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
