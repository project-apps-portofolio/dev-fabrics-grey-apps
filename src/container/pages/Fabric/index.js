import React from 'react';
import axios from 'axios';

class Index extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { fabric: '' };
      }

    componentDidMount() {
        var baseUri = 'http://localhost:8000/api/fabric';
        axios.get(baseUri).then(result => {
            var res = result.data.data;
            this.setState(
                this.state.fabric = res);
        })
    }

    render() {
        return (
            <div>

              <div className="page-content">
                <div className="page-header">
                  <h1>
                    Top Menu Style
          <small>
                      <i className="ace-icon fa fa-angle-double-right" />
                      top menu &amp; navigation
          </small>
                  </h1>
                </div>{/* /.page-header */}
                <div className="row">
                  <div className="col-xs-12">
                    {/* PAGE CONTENT BEGINS */}
                    <div className="alert alert-info visible-sm visible-xs">
                      <button type="button" className="close" data-dismiss="alert">
                        <i className="ace-icon fa fa-times" />
                      </button>
                      Please note that
            <span className="blue bolder">top menu style</span>
                      is visible only in devices larger than
            <span className="blue bolder">991px</span>
                      which you can change using CSS builder tool.
          </div>
                    <div className="well well-sm visible-sm visible-xs">
                      Top menu can become any of the 3 mobile view menu styles:
            <em>default</em>
                      ,
            <em>collapsible</em>
                      or
            <em>minimized</em>.
          </div>
                    <div className="hidden-sm hidden-xs">
                      <button type="button" className="sidebar-collapse btn btn-white btn-primary" data-target="#sidebar">
                        <i className="ace-icon fa fa-angle-double-up" data-icon1="ace-icon fa fa-angle-double-up" data-icon2="ace-icon fa fa-angle-double-down" />
                        Collapse/Expand Menu
            </button>
                    </div>
                    <div className="center">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    {/* PAGE CONTENT ENDS */}
                  </div>{/* /.col */}
                </div>{/* /.row */}
              </div>{/* /.page-content */}
            </div>
        );
      }
}

export default Index