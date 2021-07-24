import { AuthContext, FirebaseContext } from "./store/Context";
import { AuthGuard, RouteGuard } from "./guard";
import React, { useContext, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Browse from "./pages/Browse";
import CreatePost from "./pages/CreatePost";
import Error from "./pages/error";
import Home from "./pages/Home";
import Login from "./pages/Login";
// Import Components and Pages
import Navbar from "./components/navbar";
import Profile from "./pages/Profile";
import SearchPage from "./pages/SearchPage";
import Signup from "./pages/Signup";
import ViewPost from "./pages/ViewPost";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path={"/"} component={Home} />

          <Route path={["/new", "/create", "/posts/new", "/posts/create"]}>
            <RouteGuard User={user}>
              <CreatePost />
            </RouteGuard>
          </Route>

          <Route path={["/signup", "/user/signup"]}>
            <AuthGuard>
              <Signup />
            </AuthGuard>
          </Route>

          <Route path={["/login", "/user/login"]}>
            <AuthGuard>
              <Login />
            </AuthGuard>
          </Route>

          <Route path={["/user/profile"]}>
            <RouteGuard User={user}>
              <Profile />
            </RouteGuard>
          </Route>

          <Route path={["/search", "/posts/search"]} component={SearchPage} />

          <Route path={["/browse", "/posts/browse"]} component={Browse} />

          {user && <Route path={"/posts/view/:id"} component={ViewPost} />}

          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
