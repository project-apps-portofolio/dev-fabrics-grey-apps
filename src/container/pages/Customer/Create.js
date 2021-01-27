import React from 'react';


const CustomerCreate = () => {
    return (
        <div className="page-content">
            <div className="page-header">
                <h1>Form Create</h1>
            </div>

            <div className="row">
                <div className="col-xs-12 col-md-12 col-sm-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="alert alert-info text-center" role="alert">
                                Perhatian!<br />
                                Tambah Jobs Isikan Sesuai Dengan Customers
              </div>

                            {/* Content */}

                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="widget-box">
                                    <div className="widget-body">
                                        <div className="widget-main">
                                            <div>
                                                <label htmlFor="form-field-mask-1">
                                                    Code
                                                </label>
                                                <div className="input-group">
                                                    <input className="form-control input-mask-date" type="text" id="form-field-mask-1" />
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-sm btn-default" type="button">
                                                            <i className="ace-icon fa fa-calendar bigger-110" />
                                                            Code Customer
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-2">
                                                    Customer Nama
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-phone" />
                                                    </span>
                                                    <input className="form-control input-mask-phone" type="text" id="form-field-mask-2" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-3">
                                                    Nomor Pelanggan
                                                </label>
                                                <div className="input-group">
                                                    <input className="form-control input-mask-product" type="text" id="form-field-mask-3" />
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-key" />
                                                    </span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                    Phone
            <small className="text-info">~9.99 ~9.99 999</small>
                                                </label>
                                                <div>
                                                    <input className="input-medium input-mask-eyescript" type="text" id="form-field-mask-4" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                    Fax
            <small className="text-info">~9.99 ~9.99 999</small>
                                                </label>
                                                <div>
                                                    <input className="input-medium input-mask-eyescript" type="text" id="form-field-mask-4" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                    Mobile Phone
            <small className="text-info">~9.99 ~9.99 999</small>
                                                </label>
                                                <div>
                                                    <input className="input-medium input-mask-eyescript" type="text" id="form-field-mask-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="widget-box">
                                    <div className="widget-body">
                                        <div className="widget-main">
                                            <div>
                                                <label htmlFor="form-field-mask-1">
                                                    Short Name
                                                </label>
                                                <div className="input-group">
                                                    <input className="form-control input-mask-date" type="text" id="form-field-mask-1" />
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-sm btn-default" type="button">
                                                            <i className="ace-icon fa fa-calendar bigger-110" />
                                                            address
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-2">
                                                address
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-phone" />
                                                    </span>
                                                    <input className="form-control input-mask-phone" type="text" id="form-field-mask-2" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-3">
                                                city
                                                </label>
                                                <div className="input-group">
                                                    <input className="form-control input-mask-product" type="text" id="form-field-mask-3" />
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-key" />
                                                    </span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                post code
            <small className="text-info">~9.99 ~9.99 999</small>
                                                </label>
                                                <div>
                                                    <input className="input-medium input-mask-eyescript" type="text" id="form-field-mask-4" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                director name
                                                </label>
                                                <div>
                                                    <input className="input-medium input-mask-eyescript" type="text" id="form-field-mask-4" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                Employee name
                                                </label>
                                                <div>
                                                    <input className="input-medium input-mask-eyescript" type="text" id="form-field-mask-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCreate;