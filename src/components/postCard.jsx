import { AuthContext, FirebaseContext } from "../store/Context";
import { Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

import Firebase from "firebase/app";

import("./styles/card.css");

function PostCard({ post, page, handleDeletePost }) {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const db = firebase.firestore();
  const history = useHistory();

  useEffect(() => {
    setLikes(post.likes.length);
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
        .set({
          likes: Firebase.firestore.FieldValue.arrayRemove(user.uid),
        }, { merge: true })
        .then(() => {
          setLikes(likes - 1);
          setLiked(false);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      postsRef
        .doc(post.id)
        .update({
          likes: Firebase.firestore.FieldValue.arrayUnion(user.uid),
        })
        .then(() => {
          setLikes(likes + 1);
          setLiked(true);
        })
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
            <h5 className="card-title">{post.title}</h5>
            <span className="card-text fw-bold">{likes} {likes === 1 ? "Like" : "Likes" }</span>
            {"  "}
            <span role="button" onClick={like}>
              {liked ? (
                <i className="fa fa-heart text-danger like-icon jump like-icon-solid"></i>
              ) : (
                <i className="fal fa-heart like-icon rotate like-icon-light"></i>
              )}
            </span>
            <br />
            <span className="card-text">{post.shortDescription}</span>
            <br />
            <time dateTime={post.date} className="text-muted">
              - {post.date || new Date().toLocaleDateString("en-IN")}
            </time>
            <br />
            {page === "profile" ? (
              <section>
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
                <span>
                  <button className="btn btn-warning" onClick={(e)=>{
                    e.preventDefault();
                    history.push(`/posts/edit/${post.id}`);
                }}>Edit Post</button>
                </span>
              </section>
            ) : (
              <span className="streched-link text-dark fw-bold">
              Read More ...
            </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
