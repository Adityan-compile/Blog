import React, { lazy } from "react";

import marked from 'marked';
import parse from "html-react-parser";

const sanitizeHtml = lazy(()=>import('sanitize-html'));

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
