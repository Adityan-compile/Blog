import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Context, { FirebaseContext } from "./store/Context";
import React, { Suspense } from "react";

import App from "./App";
import ReactDOM from "react-dom";
import firebase from "./firebase/firebase";

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
            alignItems: "center",
            justifyContent: "center"
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
