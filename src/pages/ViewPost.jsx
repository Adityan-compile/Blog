import React, { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../store/Context";

import Render from "../components/render";

function ViewPost({ id }) {
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();
  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc.data());
        setPost(doc.data());
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [db,id]);
  return (
    <div>
      <div>
        {error && <p className="text-center text-danger p-4 pt-4">{error}</p>}
      </div>
      <div>
        {post && <Render markdown={post.body} />}
      </div>
    </div>
  );
}

export default ViewPost;
