// import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../App/App.css';

import IndexList from '../Fabric/indexList';
import Index from '../Fabric/index';
import CreateIndex from '../Fabric/createIndex';
import Home from '../Home/Home';

function App() {
  return (
    <div>
      <body className="no-skin">

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
          </div>{/* /.navbar-container */}
        </div>

        {/* <nav className="navbar navbar-expand">
        <a href="/" className="navbar-brand">
          Fabric Grey Application
        </a>
        <div className="navbar-nav mr-auto">
          <nav role="navigation" className="navbar-menu pull-left collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="#">
                  Overview
                  &nbsp;
                </a>
              </li>
            </ul>
          </nav>

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
      </nav> */}

        <div className="main-container ace-save-state" id="main-container">
          <div id="sidebar" className="sidebar      h-sidebar                navbar-collapse collapse          ace-save-state">
            <div className="sidebar-shortcuts" id="sidebar-shortcuts">
            </div>{/* /.sidebar-shortcuts */}
            <ul className="nav nav-list">
              <li className="hover">
                <a href="index.html">
                  <i className="menu-icon fa fa-tachometer" />
                  <span className="menu-text"> Dashboard </span>
                </a>
                <b className="arrow" />
              </li>
              <li className="active open hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-desktop" />
                  <span className="menu-text">
                    UI &amp; Elements
        </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="active open hover">
                    <a href="#" className="dropdown-toggle">
                      <i className="menu-icon fa fa-caret-right" />
                      Layouts
            <b className="arrow fa fa-angle-down" />
                    </a>
                    <b className="arrow" />
                    <ul className="submenu">
                      <li className="active hover">
                        <a href="top-menu.html">
                          <i className="menu-icon fa fa-caret-right" />
                          Top Menu
              </a>
                        <b className="arrow" />
                      </li>
                      <li className="hover">
                        <a href="two-menu-1.html">
                          <i className="menu-icon fa fa-caret-right" />
                          Two Menus 1
              </a>
                        <b className="arrow" />
                      </li>
                      <li className="hover">
                        <a href="two-menu-2.html">
                          <i className="menu-icon fa fa-caret-right" />
                          Two Menus 2
              </a>
                        <b className="arrow" />
                      </li>
                      <li className="hover">
                        <a href="mobile-menu-1.html">
                          <i className="menu-icon fa fa-caret-right" />
                          Default Mobile Menu
              </a>
                        <b className="arrow" />
                      </li>
                      <li className="hover">
                        <a href="mobile-menu-2.html">
                          <i className="menu-icon fa fa-caret-right" />
                          Mobile Menu 2
              </a>
                        <b className="arrow" />
                      </li>
                      <li className="hover">
                        <a href="mobile-menu-3.html">
                          <i className="menu-icon fa fa-caret-right" />
                          Mobile Menu 3
              </a>
                        <b className="arrow" />
                      </li>
                    </ul>
                  </li>
                  <li className="hover">
                    <a href="typography.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Typography
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="elements.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Elements
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="buttons.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Buttons &amp; Icons
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="content-slider.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Content Sliders
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="treeview.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Treeview
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="jquery-ui.html">
                      <i className="menu-icon fa fa-caret-right" />
                      jQuery UI
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="nestable-list.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Nestable Lists
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="#" className="dropdown-toggle">
                      <i className="menu-icon fa fa-caret-right" />
                      Three Level Menu
            <b className="arrow fa fa-angle-down" />
                    </a>
                    <b className="arrow" />
                    <ul className="submenu">
                      <li className="hover">
                        <a href="#">
                          <i className="menu-icon fa fa-leaf green" />
                          Item #1
              </a>
                        <b className="arrow" />
                      </li>
                      <li className="hover">
                        <a href="#" className="dropdown-toggle">
                          <i className="menu-icon fa fa-pencil orange" />
                          4th level
                <b className="arrow fa fa-angle-down" />
                        </a>
                        <b className="arrow" />
                        <ul className="submenu">
                          <li className="hover">
                            <a href="#">
                              <i className="menu-icon fa fa-plus purple" />
                              Add Product
                  </a>
                            <b className="arrow" />
                          </li>
                          <li className="hover">
                            <a href="#">
                              <i className="menu-icon fa fa-eye pink" />
                              View Products
                  </a>
                            <b className="arrow" />
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-list" />
                  <span className="menu-text"> Tables </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <a href="tables.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Simple &amp; Dynamic
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="jqgrid.html">
                      <i className="menu-icon fa fa-caret-right" />
                      jqGrid plugin
          </a>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-pencil-square-o" />
                  <span className="menu-text"> Forms </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <a href="form-elements.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Form Elements
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="form-elements-2.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Form Elements 2
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="form-wizard.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Wizard &amp; Validation
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="wysiwyg.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Wysiwyg &amp; Markdown
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="dropzone.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Dropzone File Upload
          </a>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className="hover">
                <a href="widgets.html">
                  <i className="menu-icon fa fa-list-alt" />
                  <span className="menu-text"> Widgets </span>
                </a>
                <b className="arrow" />
              </li>
              <li className="hover">
                <a href="calendar.html">
                  <i className="menu-icon fa fa-calendar" />
                  <span className="menu-text">
                    Calendar
          <span className="badge badge-transparent tooltip-error" title="2 Important Events">
                      <i className="ace-icon fa fa-exclamation-triangle red bigger-130" />
                    </span>
                  </span>
                </a>
                <b className="arrow" />
              </li>
              <li className="hover">
                <a href="gallery.html">
                  <i className="menu-icon fa fa-picture-o" />
                  <span className="menu-text"> Gallery </span>
                </a>
                <b className="arrow" />
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-tag" />
                  <span className="menu-text"> More Pages </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <a href="profile.html">
                      <i className="menu-icon fa fa-caret-right" />
                      User Profile
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="inbox.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Inbox
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="pricing.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Pricing Tables
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="invoice.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Invoice
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="timeline.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Timeline
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="search.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Search Results
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="email.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Email Templates
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="login.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Login &amp; Register
          </a>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-file-o" />
                  <span className="menu-text">
                    Other Pages
          <span className="badge badge-primary">5</span>
                  </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <a href="faq.html">
                      <i className="menu-icon fa fa-caret-right" />
                      FAQ
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="error-404.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Error 404
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="error-500.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Error 500
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="grid.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Grid
          </a>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <a href="blank.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Blank Page
          </a>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
            </ul>{/* /.nav-list */}
          </div>

          <div className="main-content">
            <div className="main-content-inner">
              <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path={"/fabric/create"} component={CreateIndex} />
                <Route path={"/fabric/update/:id"} component={IndexList} />
                <Route path={"/fabric/index/"} component={Index} />
              </Switch>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
