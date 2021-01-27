import React from 'react';

const JobCreate = () => {
    return (
        <div className="page-content">

            <div className="page-header">

                <h1>Form</h1>

            </div>

            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="alert alert-info text-center" role="alert">
                            Perhatian!<br />
                            Tambah Jobs Isikan Sesuai Dengan Customers
              </div>

                        {/* Content */}

                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Process Number </label>
                                <div className="col-sm-9">
                                    <input className="form-control" placeholder="Process Number"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1-1"> PO Number </label>
                                <div className="col-sm-9">
                                    <input className="form-control" placeholder="PO Number"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1-1"> Customers </label>
                                <div className="col-sm-9">
                                    <input className="form-control" placeholder="Customers"/>
                                </div>
                            </div>
                            <div className="clearfix form-actions">
                                <div className="col-md-offset-3 col-md-9">
                                    <button className="btn btn-info" type="button">
                                        <i className="ace-icon fa fa-check bigger-110" />
                                        Submit</button>
                                    &nbsp; &nbsp; &nbsp;
                                        <button className="btn" type="reset">
                                        <i className="ace-icon fa fa-undo bigger-110" />
                                        Reset</button>
                                </div>
                            </div>
                            <div className="hr hr-24" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCreate;