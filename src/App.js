import { BrowserRouter as Router, Route } from "react-router-dom";


// Import Components and Pages
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
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
