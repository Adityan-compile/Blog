import React from "react";
import { AuthContext, FirebaseContext } from "../store/Context";
import React, { lazy, useContext, useState, useEffect } from "react";

import { useHistory } from "react-router";

const Editor = lazy(() => import("../components/editor"));
const EditPostForm = lazy(() => import("../components/editPostForm"));

function EditPost(props) {
  const [post,setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = setTitle;
  const handleDescriptionChange = setDescription;
  const handleBodyChange = setBody;

  const { firebase } = useContext(FirebaseContext);

  const id = props.match.params.id;

  const db = firebase.firestore();
  const history = useHistory();

  useEffect(()=>{
    db
    .collection("posts")
    .doc(id)
    .get().then(doc=>{
        let data = doc.data();
        data.id = doc.id;
        setPost(data);
    }).catch(err=>setError(err.message));
  },[db]);

  const handleSubmit = () => {
      db
      .collection("posts")
      .doc(id)
      .set(
        {
          title: title,
          shortDescription: description,
          body: body,
        },
        { merge: true }
      )
      .then(() => {
        setMessage("Post Edited Successfully");
        setTimeout(() => history.push("/user/profile"), 2000);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <div>
        <h3 className="p-2 mt-3 text-center title-text">Edit Post</h3>
        {error && <p className="text-center text-danger p-2">{error}</p>}
        {message && <p className="text-center text-success p-2">{message}</p>}
      </div>
      <div>
        <EditPostForm
          functions={{
            handleTitleChange,
            handleDescriptionChange,
          }}
          post={post}
        />
      </div>
      <div>
        <Editor id="editor" Handler={handleBodyChange} body={post.body} />
      </div>
      <div className="p-4">
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Edit Post
        </button>
      </div>
    </div>
  );
}

export default EditPost;
