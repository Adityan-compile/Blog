import React, { Fragment, useState } from 'react';
import ReactQuill from 'react-quill'; 
import sanitizeHtml from 'sanitize-html';
import Render from './render';


function Editor() {
    const [html,setHtml] = useState("");
    const handleChange = (text)=>{
        let sanitized = sanitizeHtml(text);
        setHtml(sanitized);
    }
    return (
        <Fragment>
            <div className="p-4 m-4 mt-4 shadow-lg">
               <ReactQuill value={html} onChange={handleChange} />
            </div>
            <h1 className="p-2 text-center title-text">Preview:</h1>
            <div>
                <Render html={html} />
            </div>
        </Fragment>
    )
}

export default Editor;
