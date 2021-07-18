import React, { Fragment, useState } from "react";
import sanitizeHtml from 'sanitize-html';
import MDEditor from "@uiw/react-md-editor";
import Render from "./render";

function Editor(props) {
  const [html, setHtml] = useState("");
  const handler= (HTML) => {
    let sanitized = sanitizeHtml(HTML);
    setHtml(sanitized);
  };

  return (
    <Fragment>
      <div className="p-4 m-4 mt-4 shadow-lg">
        <MDEditor value={html} onChange={handler} />
      </div>
    </Fragment>
  );
}

export default Editor;
