import React, { useContext, useState } from "react";

import { FirebaseContext } from "../store/Context";
import { useHistory } from "react-router";

function ChangeUserProfile() {
  const { firebase } = useContext(FirebaseContext);

  const history = useHistory();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const Auth = firebase.auth();
  const currentUser = Auth.CurrentUser;

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      Auth.signInWithEmailAndPassword(currentUser.email, oldPassword)
        .then((user) => {
          currentUser
            .updatePassword(newPassword)
            .then(() => {
              setMessage("Password Changed Successfully !!");
              setTimeout(() => {
                history.push("/user/profile");
              }, 2000);
            })
            .catch((err) => setError(err.message));
        })
        .catch((err) => setError(err.message));
    } else {
      setError("Passwords Do Not Match!!");
    }
  };

  return (
    <div className="p-4 mt-2">
      {message && (
        <p className="text-center text-success p-2 mt-2">{message}</p>
      )}
      {error && <p className="text-center text-danger p-2 mt-2">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="oldPassword" className="form-label">
            Enter Name
          </label>
          <input
            type="password"
            className="form-control"
            id="oldPassword"
            onChange={setOldPassword}
          />
        </div>
        <div className="mb-3">
          <label for="newPassword" class="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            onChange={setNewPassword}
          />
        </div>
        <div className="mb-3">
          <label for="newPassword" class="form-label">
            Confirm New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            onChange={setConfirm}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Change Password
        </button>
      </form>
    </div>
  );
}

export default ChangeUserProfile;
