import PasswordChangeForm from "../components/passwordChangeForm";
import React from "react";

function EditAccount() {
  return (
    <div>
      <h1 className="text-center title-text mt-3 p-2">Change Password</h1>
      <PasswordChangeForm />
    </div>
  );
}

export default EditAccount;
