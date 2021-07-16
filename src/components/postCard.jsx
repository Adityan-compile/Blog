import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="col-md-6 mx-auto p-4">
      <div className="container text-center">
        <div className="card shadow-lg mx-auto rounded" style={{ width: "18rem" }}>
          <img
            src="https://source.unsplash.com/random"
            className="card-img-top"
            alt="Post Thumbnail"
          />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.shortDescription}</p>
            <Link to={"/"} className="streched-link text-dark fw-bold text-decoration-none">
              Read More ...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
