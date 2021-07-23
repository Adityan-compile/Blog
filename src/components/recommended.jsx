import React, { useEffect, useContext, useState } from "react";
import { FirebaseContext } from "../store/Context";
import PostCard from "./postCard";
const _ = require("lodash");

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
        const docs = _.sortBy(snapshot.docs.map((doc) => {
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
        <h1 className="text-center title-text p-4 fw-bold">Newest Posts</h1>
        <p className="text-center p-3 text-danger">{ error }</p>
      </div>
      <div className="row">
        {posts.map((res, idx) => (
          <div className="col-md-6 mx-auto p-4">
          <PostCard post={res} key={idx} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
