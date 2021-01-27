import React from 'react';
import { Link } from 'react-router-dom';
import TblCustomer from './TblCustomer';

class CustomerIndex extends React.Component {

    render() {
        return (
             <div className="page-content">
                <div className="page-header">
                    <h1>Create Customers</h1>
                </div>
                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="form-group pull-right">
                            <div className="btn-group">
                                <Link to="/customers/create" className="btn btn-primary btn-sm pull-right">
                                    <i className="fa fa-plus">&nbsp; Tambah Pelanggan</i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <TblCustomer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerIndex;