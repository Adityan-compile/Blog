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
    db.collection("posts")
      .get()
      .then(snapshot => {
        const res = _.shuffle(snapshot.docs.map((doc) => doc.data()));
        setPosts(res);
      }).catch(err=>setError(err.message));
  }, [db]);
  return (
    <div className="p-2">
      <div>
        <h1 className="text-center title-text p-4 fw-bold">Newest Posts</h1>
        <p className="text-center p-3 text-danger">{ error }</p>
      </div>
      <div className="row">
        {posts.map((res, idx) => (
          <PostCard post={res} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
