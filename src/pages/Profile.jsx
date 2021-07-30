import { AuthContext, FirebaseContext } from "../store/Context";
import { Link, useHistory } from "react-router-dom";
import React, { lazy, useContext, useEffect, useState } from "react";

const PostCard = lazy(()=>import("../components/postCard"));

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

  const deletePost = (postId) => {
    const confirmation = window.confirm(
      "Are You Sure You Want to Delete This Post?"
    );
    if (confirmation) {
      db.collection("posts")
        .doc(postId)
        .delete()
        .then(() => {
          let el = document.getElementById(postId);
          el.parentNode.removeChild(el);
          setMessage("Post Deleted Successfully!!");
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  const deleteAccount = () => {
    const confirmation = window.confirm(
      "Are You Sure You Want to Delete Your Account?"
    );
    if (confirmation) {
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
    }
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
          <Link className="btn btn-warning" to={'/account/password/change'}>Change Password</Link>
        </span>
        <span className="p-2">
          <button className="btn btn-danger" onClick={deleteAccount}>
            Delete Account
          </button>
        </span>
      </div>
      <div className="posts pt-3">
        <h1 className="text-center title-text p-2 mb-2">Your Posts</h1>
        <div className="row">
          {posts.map((res) => (
            <div className="col-md-6 mx-auto p-4" id={res.id} key={res.id}>
              <PostCard
                post={res}
                page="profile"
                handleDeletePost={deletePost}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
