import React, { useEffect, useState } from 'react';
import DatatableList from './datatable';

const IndexList = () => {

    return (
        (<div key='uniqueKey'>
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
                {/* /.page-header */}
                <div className="row" key="unique">
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