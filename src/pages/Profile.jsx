import React, { useEffect, useContext, useState } from "react";
import { AuthContext, FirebaseContext } from "../store/Context";
import { useHistory } from "react-router";

import PostCard from "../components/postCard";

function Profile() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const db = firebase.firestore();
  const Auth = firebase.auth();
  const history = useHistory();
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
      .catch((err) => {
        setMessage("");
        setError(err.message);
      });
  }, [db, userId]);

  const deleteAccount = () => {
    Auth.currentUser
      .delete()
      .then(() => {
        setError("");
        setMessage("Account Deleted Successfully");
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((err) => {
        setMessage("");
        setError(err.message);
      });
  };

  return (
    <div>
      <div className="page-title p-2 mt-2">
        <h1 className="text-center title-text">Profile</h1>
        {error && <p className="text-center text-danger p-2">{error}</p>}
        {message && <p className="text-center text-success p-2">{message}</p>}
      </div>
      <div className="info text-center">
        <h3 className="text-center">Name: {user.displayName}</h3>
        <h3 className="text-center">Email: {user.email}</h3>
        <span className="p-2">
          <button className="btn btn-warning">Edit Account</button>
        </span>
        <span className="p-2">
          <button className="btn btn-danger" onClick={deleteAccount}>Delete Account</button>
        </span>
      </div>
      <div className="posts pt-3">
        <h1 className="text-center title-text p-2 mb-2">Your Posts</h1>
        <div className="row">
          {posts.map((res, idx) => (
            <PostCard post={res} key={idx} page="profile" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
