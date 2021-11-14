import React, { useContext, useEffect, useState } from "react";

import { FirebaseContext } from "../store/Context";
import PostCard from "./postCard";

function Search() {
  const [query, setQuery] = useState("");
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

  const search = () => {
    db.collection("posts")
    .orderBy('title')
    .startAt(query)
    .endAt(query + '\uf8ff')
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
  };

  return (
    <div>
      <div>
        {error && <p className="text-center text-danger p-4 mt-2">{error}</p>}
      </div>
      <div className="search">
        <div className="input-group mb-3 p-2">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e)=>{
              if(e.key === "Enter") return search();
            }}
            value={query}
            placeholder="Search For Your Favourite Blog Posts !!"
            aria-label="Search Bar"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-success"
            type="button"
            id="button-addon2"
            onClick={search}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="posts">
        <div className="row">
          {posts.map((res, idx) => (
            <div className="col-md-6 mx-auto p-4">
            <PostCard post={res} key={idx} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
