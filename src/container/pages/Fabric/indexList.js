import React, { useEffect, useState } from 'react';
import DatatableList from './datatable';
import DownloadXls from '../Csv/downloadXls';
import {Link} from 'react-router-dom';
const IndexList = () => {

    return (
        (<div key='uniqueKey'>
            <div className="page-content">
                <div className="page-header">
                    <h1>
                        Fabric List All
                        <small>
                            <i className="ace-icon fa fa-angle-double-right" />
                            fabric list menus
                        </small>
                    </h1>
                </div>
                {/* /.page-header */}
                <div className="row" key="unique">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="form-group pull-left">
                            <div className="btn-group">
                            <Link to="/fabric/create">
                                    <button className="btn btn-primary btn-sm">New</button>
                                </Link>
                            </div>
                        </div>
                        <div className="form-group pull-right">
                            <div className="btn-group">
                                <DownloadXls/>
                            </div>
                        </div>
                    </div> 
                    <div className="col-xs-12">
                        <DatatableList/>    
                        {/* PAGE CONTENT ENDS */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </div>
            {/* /.page-content */}
        </div>)
    )  
}


export default IndexList;