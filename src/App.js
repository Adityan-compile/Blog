import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import Components and Pages
import Navbar from "./components/navbar";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
        <Route exact path={'/'}>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
