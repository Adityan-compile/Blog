import React from "react";
import marked from 'marked';
import sanitizeHtml from 'sanitize-html';
import parse from "html-react-parser";

const Render = ({ markdown }) => {
  const styles = {
      overflowWrap: 'break-word'
  };
  return( 
  <div className="p-4 m-4 mt-4 shadow-lg" style={styles}>
    {markdown && parse(sanitizeHtml(marked(markdown)))}
  </div>);
};

export default Render;
