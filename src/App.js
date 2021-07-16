import { BrowserRouter as Router, Route } from "react-router-dom";
import React,{ useEffect, useContext } from "react";


// Import Components and Pages
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthContext, FirebaseContext } from "./store/Context";

function App() {
  const {setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user);
    });
  })
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/signup"}>
            <Signup />
          </Route>
          <Route path={"/login"} component={Login} />
        </Router>
    </div>
  );
}

export default App;
