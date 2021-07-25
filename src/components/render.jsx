import MDEditor from '@uiw/react-md-editor';
import React from "react";

const Render = ({ markdown }) => {
  const styles = {
      overflowWrap: 'break-word'
  };
  return( 
  <div className="p-4 m-4 mt-4 shadow-lg" style={styles}>
    { markdown && <MDEditor.Markdown source={markdown} /> }
  </div>
  );
};

export default Render;
