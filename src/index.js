import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context,{ FirebaseContext } from "./store/Context";
import firebase from './firebase/firebase';

ReactDOM.render(
  <React.StrictMode>
      <FirebaseContext.Provider value={{firebase}}>
         <Context>
           <App />
         </Context>
      </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
