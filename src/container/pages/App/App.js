import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import '../App/App.css';

import IndexList from '../Fabric/indexList';
import Index from '../Fabric/index';
import CreateIndex from '../Fabric/createIndex';
import Home from '../Home/Home';

function App() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-collapse h-navbar ace-save-state">
      <div className="navbar-header pull-left">
					<a href="index.html" className="navbar-brand">
						<small>
							<i className="fa fa-leaf"></i>
							Ace Admin
						</small>
					</a>
				</div>
        <div className="navbar-buttons navbar-header pull-right" role="navigation">
          <ul className="nav ace-nav">

          </ul>
        </div>
        {/* <a href="/" className="navbar-brand">
          Fabric Grey Application
        </a> */}
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
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path={"/fabric/create"} component={CreateIndex} />
          <Route path={"/fabric/update/:id"} component={IndexList} />
          <Route path={"/fabric/index/"} component={Index} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
