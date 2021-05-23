import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                <Link className="nav-link" to="/features">Features</Link>
                <Link className="nav-link" to="pricing">Pricing</Link>
              </div>
            </div>
          </div>
        </nav>

        <h1>App Component</h1>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/features" component={Features} />
          <Route path="/pricing" component={Pricing} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
