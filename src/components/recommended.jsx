import React, { useContext, useEffect, useState } from "react";

import { FirebaseContext } from "../store/Context";
import PostCard from "./postCard";
import sortBy from "lodash/sortBy";

function Recommended() {
  const { firebase } = useContext(FirebaseContext);
  const [error,setError] = useState('');
  const [posts, setPosts] = useState([]);
  const db = firebase.firestore();
  useEffect(() => {
      db
      .collection("posts")
      .get()
      .then(snapshot => {
        const docs = sortBy(snapshot.docs.map((doc) => {
          let id = doc.id;
          doc = doc.data();
          doc.id = id;
          return doc;
        }), ['date']);
        setPosts(docs);
      }).catch(err=>setError(err.message));
  },[db]);

  return (
    <div className="p-2">
      <div>
        <h1 className="text-center title-text p-3 fw-bold">Newest Posts</h1>
        <p className="text-center p-3 text-danger">{ error }</p>
      </div>
      <div className="row">
        {posts.map((res, idx) => (
          <div className="col-md-6 mx-auto p-4" key={res.id}>
          <PostCard post={res} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
