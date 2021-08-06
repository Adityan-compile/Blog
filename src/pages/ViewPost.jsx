import React, { useContext, useEffect, useState } from "react";

import { FirebaseContext } from "../store/Context";
import Render from "../components/render";
import { useHistory } from "react-router";

function ViewPost(props) {
  const history = useHistory();

  const [post, setPost] = useState({});

  const [thumbnail, setThumbnail] = useState("");

  const [author,setAuthor] = useState();

  const [error, setError] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const db = firebase.firestore();

  const id = props.match.params.id;

  if (!id) history.push("/");

  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .get()
      .then((doc) => {
        let data = doc.data();
        setThumbnail(data.thumbnail);
        setPost(data);
        db.collection("users").where("id", "==", data.author).get().then(author=>{
          setAuthor(author.data());
        }).catch(err=>{});
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [db, id]);

  const styles = {
    height: '300px',
    width: "100%",
    backgroundImage: `url(${thumbnail})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div>
      <div>
        {error && <p className="text-center text-danger p-4 mt-4">{error}</p>}
      </div>
      {thumbnail && (
        <div className="banner mb-3" style={styles}>
        </div>
      )}

      <div className="p-4">
        <h1 className="fw-bold text-center text-monospace">{ post.title }</h1>
        { author && <p className="text-left text-disabled">Author:{author.name}</p>}
      </div>
    
      <div className="render-area">
        {post && <Render markdown={post.body} />}
      </div>
    </div>
  );
}

export default ViewPost;
