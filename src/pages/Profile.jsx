import React, { useEffect, useContext, useState } from "react";
import { AuthContext, FirebaseContext } from "../store/Context";

import PostCard from "../components/postCard";

function Profile() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const db = firebase.firestore();
  const userId = user.uid;

  useEffect(() => {
    db.collection("posts")
      .where("author", "==", userId)
      .get()
      .then((snapshot) => {
        let docs = snapshot.docs.map((doc) => {
          let id = doc.id;
          doc = doc.data();
          doc.id = id;
          return doc;
        });
        setPosts(docs);
      })
      .catch((err) => setError(err.message));
  }, [db, userId]);

  return (
    <div>
        <div className="page-title p-2 mt-2">
          <h1 className="text-center title-text">Profile</h1>
          { error && <p className="text-center text-danger p-2">{error}</p> }
        </div>
        <div className="info text-center">
            <h3 className="text-center">Name: { user.displayName }</h3>
            <h3 className="text-center">Email: { user.email }</h3>
        </div>
      <div className="posts">
          <h1 className="text-center title-text p-2 mb-2">Your Posts</h1>
        <div className="row">
          {posts.map((res, idx) => (
            <PostCard post={res} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
