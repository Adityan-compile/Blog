import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import Components and Pages
import Navbar from "./components/navbar";
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route path={'/signup'}>
          <Signup />
        </Route>
      </Router>
    </div>
  );
}

export default App;
