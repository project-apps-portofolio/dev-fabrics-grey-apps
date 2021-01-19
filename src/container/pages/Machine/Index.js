import React from 'react';
import Tbl from './Tbl';
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
                        <Tbl/>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndexMachine;