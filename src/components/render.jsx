import React from "react";
import parse from "html-react-parser";

const Render = ({ html }) => {
  const styles = {
      overflowWrap: 'break-word'
  };
  return <div className="p-4 m-4 mt-4 shadow-lg" style={styles}>{parse(html)}</div>;
};

export default Render;
