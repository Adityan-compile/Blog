import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React,{ useEffect, useContext } from "react";
import { AuthGuard, RouteGuard } from "./guard";
import { AuthContext, FirebaseContext } from "./store/Context";

// Import Components and Pages
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePost from "./pages/CreatePost";
import Error from "./pages/error";
import ViewPost from "./pages/ViewPost";

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
          <Switch>
          <Route exact path={"/"} component={ Home } />
          <Route path={'/posts/new'}>
            <RouteGuard User={user}>
              <CreatePost/>
            </RouteGuard>
          </Route>
          <Route path={"/signup"}>
            <AuthGuard>
              <Signup/>
            </AuthGuard>
          </Route>
          <Route path={"/login"}>
          <AuthGuard>
            <Login />
          </AuthGuard>
          </Route>
          { user && (<Route path={'/posts/view/:id'}component={ViewPost}/>) }
          <Route component={ Error } />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
