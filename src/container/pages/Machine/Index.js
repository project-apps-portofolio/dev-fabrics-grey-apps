import React from 'react';
import Tbl from './Tbl';
import { Link } from 'react-router-dom';
const $ = require('jquery')
$.Datatable = require('datatables.net')

class IndexMachine extends React.Component {

    render() {
        return (
            <div className="page-content">
                <div className="page-header">
                    <h1>
                        Top Menu Style
                    <small>
                            <i className="ace-icon fa fa-angle-double-right" />
                            top menu &amp; navigation
                    </small>
                    </h1>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-12 col-sm-12">
                        <div className="col-sm-12 col-xs-12 col-md-12">
                        <div className="form-group pull-right">
                            <div className="btn-group">
                            <Link to="/machine/create">
                                    <button className="btn btn-primary btn-sm"><i className="fa fa-plus"></i>&nbsp;New</button>
                                </Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-12">
                        <Tbl />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndexMachine;