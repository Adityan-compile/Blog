import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../store/Context";
import PostCard from "../components/postCard";

function Browse() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
  
    const { firebase } = useContext(FirebaseContext);
  
    const db = firebase.firestore();
  
    useEffect(() => {
      db.collection("posts")
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
    }, [db]);
  return (
    <div>
      <div className="p-3 mt-2">
        <h1 className="text-center title-text fw-bold">Browse</h1>
        <p className="text-center text-danger p-2">{ error }</p>
      </div>
      <div className="posts">
        <div className="row">
          {posts.map((res, idx) => (
            <PostCard post={res} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Browse;
