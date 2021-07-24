import "./index.css";

import Context, { FirebaseContext } from "./store/Context";
import React, { Suspense } from "react";

import App from "./App";
import ReactDOM from "react-dom";
import firebase from "./firebase/firebase";

import("bootstrap/dist/css/bootstrap.min.css");
import("bootstrap/dist/js/bootstrap.bundle.min.js");

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            padding: "50px",
            margin: "0px auto",
            display: "block",
          }}
        >
          Loading...
        </h1>
      }
    >
      <FirebaseContext.Provider value={{ firebase }}>
        <Context>
          <App />
        </Context>
      </FirebaseContext.Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
