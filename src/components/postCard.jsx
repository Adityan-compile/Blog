import { AuthContext, FirebaseContext } from "../store/Context";
import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import("./styles/card.css");

function PostCard({ post, page, handleDeletePost }) {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const [liked, setLiked] = useState(false);
  
  const Firestore = firebase.firestore;
  const db = firebase.firestore();

  useEffect(() => {
    post.likes.forEach((el) => {
      if (el === user.uid) return setLiked(true);
    });
  }, [user, post]);

  const like = (e) => {
    e.preventDefault();
    let postsRef = db.collection("posts");
    if (liked) {
      postsRef
        .doc(post.id)
        .update({
          likes: Firestore.FieldValue.arrayRemove(user.uid),
        })
        .then(() => setLiked(false))
        .catch((err) => {
          alert(err.message);
        });
    } else {
      postsRef
        .doc(post.id)
        .update({
          likes: Firestore.FieldValue.arrayUnion(user.uid),
        })
        .then(() => setLiked(true))
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className="container text-center">
      <Link to={`/posts/view/${post.id}`} className="text-decoration-none">
        <div
          className="card shadow-lg mx-auto rounded text-dark text-decoration-none"
          style={{ width: "18rem" }}
        >
          {post.thumbnail !== undefined && post.thumbnail.length > 0 && (
            <img
              src={post.thumbnail}
              className="card-img-top"
              alt="Post Thumbnail"
            />
          )}
          <div className="card-body">
            <h5 className="card-title">
              {post.title}{" "}
              <span role="button" onClick={like}>
                {liked ? (
                  <i className="fa fa-heart text-danger"></i>
                ) : (
                  <i className="fal fa-heart"></i>
                )}{" "}
              </span>
            </h5>
            <span className="card-text">{post.shortDescription}</span>
            <br />
            <time dateTime={post.date} className="text-muted">
              - {post.date || new Date().toLocaleDateString("en-IN")}
            </time>
            <br />
            {page === "profile" && (
              <span className="p-2">
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeletePost(post.id);
                  }}
                >
                  Delete Post
                </button>
              </span>
            )}
            <span className="streched-link text-dark fw-bold">
              Read More ...
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
