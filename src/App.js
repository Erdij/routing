import "./App.css";
import Logo from "./images/dollar.png";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Home from "./components/Home";
import { Link, Switch, Route, useParams } from "react-router-dom"; //

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={Logo} alt="Dollar" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3 ">
        <div className="row">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <div className="col-md-12">
            <div className="alert alert-warning" role="alert">
              <Switch>
                <Route path="/:id" children={<Child />}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID : {id}</h3>
    </div>
  );
}

export default App;
