import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/cover.css";
import { AuthContext } from "../store/Context";

const Cover = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="cover">
      <div className="p-4 home-text pt-4 container">
        <h1 className="p-4 mt-4 align-middle align-text-middle text-wrap text-break pt-4">
          <p>Let's Learn & Grow Together with</p>
          <span>&lt;Codable/&gt;</span>
        </h1>
        <div>
          {user ? (
            <Link className="btn btn-outline-light fw-bold border-2" to={'/posts/new'}>Create Post</Link>
          ) : (
            <div>
              <span className="p-1 pb-4">
                <Link
                  className="btn btn-outline-light fw-bold border-3"
                  to={"/login"}
                >
                  Login
                </Link>
              </span>
              <span className=" p-1 pb-4">
                <Link
                  className="btn btn-outline-light fw-bold border-3"
                  to={"/signup"}
                >
                  Signup
                </Link>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cover;
