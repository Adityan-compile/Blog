import React, { Fragment, useState } from 'react';
import ReactQuill from 'react-quill'; 
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';


function Editor() {
    const [text,setText] = useState("");
    const handleChange = (html)=>{
        let sanitized = sanitizeHtml(html);
        // let parsed = parse(sanitized);
        setText(sanitized);
    }
    return (
        <Fragment>
            <div className="p-4">
            </div>
            <div className="p-4 m-4 mt-4 shadow-lg">
               <ReactQuill value={text} onChange={handleChange} />
            </div>
        </Fragment>
    )
}

export default Editor;
