import React, { useContext, useEffect, useState } from "react";

import EditPostForm from "../components/editPostForm";
import { FirebaseContext } from "../store/Context";
import { useHistory } from "react-router";

function EditPost({ id, err, Post }) {
  const [post,setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  if(err) setError(err);
  if(Post) setPost(Post);

  const { firebase } = useContext(FirebaseContext);

  const db = firebase.firestore();
  const postRef = db.collection('posts').doc(id);

  useEffect(()=>{
    postRef.get().then(doc=>{
      setPost(doc.data());
    }).catch(err=>setError(err.message));
  },[postRef]);

  const handleSubmit = () => {
    postRef
      .set(
        {
          title: title,
          shortDescription: description,
          body: body,
        },
        { merge: true }
      )
      .then(() => {
        setMessage("Post Edited Successfully");
        setTimeout(() => history.push("/user/profile"), 2000);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <div>
        <h3 className="p-2 mt-3 text-center title-text">Edit Post</h3>
        {error && <p className="text-center text-danger p-2">{error}</p>}
        {message && <p className="text-center text-success p-2">{message}</p>}
      </div>
      <div>
        <EditPostForm
          functions={{
            setTitle,
            setDescription,
            setBody
          }}
          data={post}
        />
      </div>
      <div className="p-3">
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Edit Post
        </button>
      </div>
    </div>
  );
}

export default EditPost;

/**
 * \\\\\\      \\\\\\\
 * \     \     \
 * \     \     \
 * \\\\\\\     \\\\\\
 * \      \    \
 * \       \   \
 * \        \  \\\\\\\
 **/

// import React, { useContext, useEffect, useState } from "react";

// import EditPostForm from "../components/editPostForm";
// import Editor from "../components/editor";
// import { FirebaseContext } from "../store/Context";
// import { useHistory } from "react-router";

// function EditPost({ id }) {
//   const [post, setPost] = useState({});
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [body, setBody] = useState("");

//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const { firebase } = useContext(FirebaseContext);

//   const db = firebase.firestore();
//   const history = useHistory();

//   useEffect(() => {
//     db.collection("posts")
//       .doc(id)
//       .get()
//       .then((doc) => {
//         setPost(doc.data());
//       })
//       .catch((err) => setError(err.message));
//   }, []);

//   const handleSubmit = () => {
//     db.collection("posts")
//       .doc(id)
//       .set(
//         {
//           title: title,
//           shortDescription: description,
//           body: body,
//         },
//         { merge: true }
//       )
//       .then(() => {
//         setMessage("Post Edited Successfully");
//         setTimeout(() => history.push("/user/profile"), 2000);
//       })
//       .catch((err) => {
//         setError(err.message);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <h3 className="p-2 mt-3 text-center title-text">Edit Post</h3>
//         {error && <p className="text-center text-danger p-2">{error}</p>}

//         {message && <p className="text-center text-success p-2">{message}</p>}
//       </div>
//       <div>
//         <EditPostForm data={Object.assign({}, post)} functions={{
//           setTitle,
//           setDescription,
//           setBody
//         }} />
//       </div>
//     </div>
//   );
// }

// export default EditPost;
