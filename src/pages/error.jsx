import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="p-4 mt-4 text-center">
        <img
          src="https://img-premium.flaticon.com/png/512/3040/premium/3040620.png?token=exp=1626702925~hmac=ef1ab37b9267ce8292b334df88e11dac"
          alt="404 Error Image"
          style={{
            height: "200px",
            width: "200px",
          }}
        />
        <h3 className="pt-3">Look's Like You Are Lost !!</h3>
        <div className="p-3">
            <Link
              className="btn btn-success fw-bold p-2"
              to={"/"}>
              <span className="h-6"> Take Me Home </span>
              <i className="fal fa-home"></i>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
