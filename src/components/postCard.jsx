import React from "react";
import { Link } from "react-router-dom";
import ("./styles/card.css");

function PostCard({ post, page, handleDeletePost }) {
  return (
      <div className="container text-center">
        <Link to={`/posts/view/${post.id}`} className="text-decoration-none">
          <div
            className="card shadow-lg mx-auto rounded text-dark text-decoration-none"
            style={{ width: "18rem" }}
          >
            <img
              src={
                post.thumbnail ||
                "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2clMjBkZWZhdWx0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
              className="card-img-top"
              alt="Post Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <span className="card-text">{post.shortDescription}</span>
              <br />
              <time dateTime={post.date} className="text-muted">
                - {post.date || new Date().toLocaleDateString("en-IN")}
              </time>
              <br />
              {page === "profile" && (
                <span className="p-2">
                  <button className="btn btn-danger" onClick={(e)=>{
                    e.preventDefault()
                    handleDeletePost(post.id)
                  }}>Delete Post</button>
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
