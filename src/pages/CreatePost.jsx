import React, { useContext, useState, lazy } from "react";
import { FirebaseContext, AuthContext } from "../store/Context";
import { useHistory } from "react-router";
const Editor = lazy(()=>import("../components/editor"));
const PostForm = lazy(import("../components/postForm"));

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleTitleChange = setTitle;
  const handleDescriptionChange = setDescription;
  const handleThumbnailChange = setThumbnail;
  const handleBodyChange = setBody;

  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);

  const date = new Date().toLocaleDateString("en-IN");

  const history = useHistory();

  const handleSubmit = () => {
    firebase
      .storage()
      .ref(`/images/${thumbnail.name}`)
      .put(thumbnail)
      .then(({ ref }) => {
        ref
          .getDownloadURL()
          .then((url) => {
            firebase
              .firestore()
              .collection("posts")
              .add({
                title: title,
                shortDescription: description,
                body: body,
                thumbnail: url,
                date: date,
                author: user.uid,
              })
              .then(() => {
                setMessage("Post Created Successfully");
                setTimeout(() => history.push("/"), 2000);
              })
              .catch((err) => {
                setError(err.message);
              });
          })
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <div>
        <h3 className="p-2 mt-3 text-center title-text">Create New Post</h3>
        { error && <p className="text-center text-danger p-2">{error}</p> }
        { message && <p className="text-center text-success p-2">{message}</p> }
      </div>
      <div>
        <PostForm
          functions={{
            handleTitleChange,
            handleDescriptionChange,
            handleThumbnailChange,
          }}
        />
      </div>
      <div>
        <Editor id="editor" Handler={handleBodyChange} />
      </div>
      <div className="p-4">
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Create Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
