// import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../App/App.css';

import IndexList from '../Fabric/indexList';
import Index from '../Fabric/index';
import CreateIndex from '../Fabric/createIndex';
import Home from '../Home/Home';
import Login from '../Auth/Login';
import DownloadXls from '../Csv/downloadXls';
import IndexMachine from '../Machine/Index';

function App() {
  return (
    <div>
        <div id="navbar" className="navbar navbar-default navbar-collapse h-navbar ace-save-state">
          <div className="navbar-container ace-save-state" id="navbar-container">
            <div className="navbar-header pull-left">
              <a href="index.html" className="navbar-brand">
                <small>
                  <i className="fa fa-leaf" />
                  Ace Admin
                </small>
              </a>
            </div>
          </div>
        </div>
        
        {/* Menu */}
        <div className="main-container ace-save-state" id="main-container">
          <div id="sidebar" className="sidebar      h-sidebar                navbar-collapse collapse          ace-save-state">
            <div className="sidebar-shortcuts" id="sidebar-shortcuts">
            </div>{/* /.sidebar-shortcuts */}
            <ul className="nav nav-list">
              <li className="hover">
                {/* <a href="/">
                  <i className="menu-icon fa fa-tachometer" />
                  <span className="menu-text"> Dashboard </span>
                </a> */}
                 <Link to="/">
                      <i className="menu-icon fa fa-tachometer" />
                      <span className="menu-text"> Dashboard </span>
                    </Link>
                <b className="arrow" />
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-desktop" />
                  <span className="menu-text">
                   Machine
                  </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                   <Link to="/machine/index">
                   <i className="menu-icon fa fa-caret-right" />
                      Management
                   </Link>
                   </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#tidakada" className="dropdown-toggle">
                  <i className="menu-icon fa fa-list" />
                  <span className="menu-text"> Fabric </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <Link to="/fabric/create">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric
                    </Link>
                    {/* <a href="/fabric/create">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric
                    </a> */}
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                  <Link to="/fabric/list">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric List
                  </Link>
                    {/* <a href="/fabric/list">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric List
                    </a> */}
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-list" />
                  <span className="menu-text"> Fabric Grey Report </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    {/* <a href="tables.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric Report
                    </a> */}
                    <Link to="/fabric/list">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric List
                  </Link>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    {/* <a href="/">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric Report
                    </a> */}
                                      <Link to="/fabric/list">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric List
                  </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="main-content">
            <div className="main-content-inner">
              <Switch>
                <Route exact path={"/home"} component={Home} />
                {/* Fabric */}
                <Route exact path={"/fabric/create"} component={CreateIndex} />
                <Route path={"/fabric/list"} component={IndexList} />
                <Route path={"/fabric/index/"} component={Index} />
                <Route exact path={["/", "/login"]} component={Login} />
                <Route path={"/xsl"} component={DownloadXls} />
                {/* Machine */}
                {/* <Route exact path={"/machiine/create"} component={CreateIndex} />
                <Route path={"/machiine/list"} component={IndexList} /> */}
                <Route path={"/machine/index"} component={IndexMachine} />
              </Switch>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
