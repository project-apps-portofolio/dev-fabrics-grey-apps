import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App/App.css';

import IndexList from '../Fabric/indexList';
import Index from '../Fabric/index';
import CreateIndex from '../Fabric/createIndex';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Fabric Grey Application
        </a>
        <div className="navbar-nav mr-auto">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/fabric/index" className="nav-link">
                Example
            </Link>
            </li>
            <li className="navbar-nav mr-auto">
              <Link to="/fabric/create" className="nav-link">
                Example
            </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "fabric/index"]} component={Index} />
          <Route exact path={"/fabric/create"} component={CreateIndex} />
          <Route path={"/fabric/update/:id"} component={IndexList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
