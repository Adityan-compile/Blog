import { BrowserRouter as Router, Route } from "react-router-dom";
import React,{ useEffect, useContext } from "react";


// Import Components and Pages
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthGuard } from "./guard";
import { AuthContext, FirebaseContext } from "./store/Context";

function App() {
  const {user, setUser} = useContext(AuthContext);
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
            <AuthGuard Component={Signup} />
          </Route>
          <Route path={"/login"}>
          <AuthGuard Component={Login} />
          </Route>
        </Router>
    </div>
  );
}

export default App;
