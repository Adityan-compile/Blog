import React from "react";
import { Link } from "react-router-dom";
import './styles/card.css'

function PostCard({ post }) {
  return (
    <div className="col-md-6 mx-auto p-4">
      <div className="container text-center">
        <Link to={`/posts/view/${post.id}`} className="text-decoration-none">
        <div className="card shadow-lg mx-auto rounded text-dark text-decoration-none" style={{ width: "18rem" }}>
          <img
            src="https://source.unsplash.com/random"
            className="card-img-top"
            alt="Post Thumbnail"
          />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <span className="card-text">{post.shortDescription}</span>
            <br />
            <time dateTime={post.date} className="text-muted">- { post.date || new Date().toLocaleDateString('en-IN')}</time>
            <br />
            <span className="streched-link text-dark fw-bold">
              Read More ...
              </span>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
