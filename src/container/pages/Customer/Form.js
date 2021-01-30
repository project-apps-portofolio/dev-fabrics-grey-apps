import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../../services/service';


import 'reactjs-popup/dist/index.css';
const FormCustomer = () => {
    const initialize = {
        code: '',
        name: '',
        nomor_pelanggan: '',
        short_name: '',
        address: '',
        city: '',
        post_code: '',
        director_name: '',
        employee_name: '',
        phone: '',
        fax: '',
        mobile_phone: '',
    }

    const [customers, setCustomer] = useState(initialize);


    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setCustomer({ ...customers, [name]: value });
        console.log(name, value);
    }


    const SubmitButton = (e) => {
        e.preventDefault();

        const data = {
            // code: customers.code,
            name: customers.name,
            nomor_pelanggan: customers.nomor_pelanggan,
            short_name: customers.short_name,
            address: customers.address,
            city: customers.city,
            post_code: customers.post_code,
            director_name: customers.director_name,
            employee_name: customers.employee_name,
            phone: customers.phone,
            fax: customers.fax,
            mobile_phone: customers.mobile_phone,
        }

        // console.log(data);
        const res = Service.postCustomer(data);
        // console.log(res);
        alert('Create Customer Success');
    }


    return (
        <div>
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
                                                <label htmlFor="form-field-mask-2">
                                                    Name
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-user" />
                                                    </span>
                                                    <input name="name"
                                                        required
                                                        value={customers.name}
                                                        onChange={handleChangeInput} className="form-control input-mask-phone" type="text" id="form-field-mask-2" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-3">
                                                    Nomor Pelanggan
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-users" />
                                                    </span>
                                                    <input name="nomor_pelanggan"
                                                        required
                                                        value={customers.nomor_pelanggan}
                                                        onChange={handleChangeInput} className="form-control input-mask-phone" type="text" id="form-field-mask-2" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                    Phone
                                                    <small className="text-info">~022(xxx)</small>
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-phone" />
                                                    </span>
                                                    <input name="phone"
                                                        required
                                                        value={customers.phone}
                                                        onChange={handleChangeInput} className="form-control input-mask-phone" type="text" id="form-field-mask-2" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                    Fax
                                                    <small className="text-info">~022(xxx)</small>
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-phone" />
                                                    </span>
                                                    <input name="fax"
                                                        required
                                                        value={customers.fax}
                                                        onChange={handleChangeInput} className="form-control input-mask-phone" type="text" id="form-field-mask-2" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                    Mobile Phone
                                                        <small className="text-info">~9.99 ~9.99 999</small>
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-phone" />
                                                    </span>
                                                    <input name="mobile_phone"
                                                        required
                                                        value={customers.mobile_phone}
                                                        onChange={handleChangeInput} className="form-control input-mask-phone" type="text" id="form-field-mask-2" />
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
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-phone" />
                                                    </span>
                                                    <input
                                                        name="short_name"
                                                        required
                                                        value={customers.short_name}
                                                        onChange={handleChangeInput}
                                                        className="form-control input-mask-phone" type="text" id="form-field-mask-2" />
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
                                                    <input className="form-control input-mask-phone"
                                                        name="address"
                                                        required
                                                        value={customers.address}
                                                        onChange={handleChangeInput}
                                                        type="text" id="form-field-mask-2" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-3">
                                                    city
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-map-marker" />
                                                    </span>
                                                    <input className="form-control input-mask-product"

                                                        name="city"
                                                        required
                                                        value={customers.city}
                                                        onChange={handleChangeInput}

                                                        type="text" id="form-field-mask-3" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                    post code
                                                        <small className="text-info">~9.99 ~9.99 999</small>
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-map-marker" />
                                                    </span>
                                                    <input className="form-control input-mask-product"

                                                        name="post_code"
                                                        required
                                                        value={customers.post_code}
                                                        onChange={handleChangeInput}

                                                        type="text" id="form-field-mask-3" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                    director name
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-tasks" />
                                                    </span>
                                                    <input className="form-control input-mask-product"

                                                        name="director_name"
                                                        required
                                                        value={customers.director_name}
                                                        onChange={handleChangeInput}

                                                        type="text" id="form-field-mask-3" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <label htmlFor="form-field-mask-4">
                                                    Employee name
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ace-icon fa fa-user" />
                                                    </span>
                                                    <input className="form-control input-mask-product"

                                                        name="employee_name"
                                                        required
                                                        value={customers.employee_name}
                                                        onChange={handleChangeInput}

                                                        type="text" id="form-field-mask-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group pull-right">
                        <div className="form-group">
                            <Link to="/customers" className="btn btn-sm btn-primary"> Back </Link> &nbsp;
                        <Link to="#" onClick={SubmitButton} className="btn btn-sm btn-primary"> Submit </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default FormCustomer;