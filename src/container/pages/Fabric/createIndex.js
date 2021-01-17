import React, { useState, useEffect } from 'react';
import ServiceFabric from '../.././../services/service';

const CreateIndex = () => {
    const initialize = {
        id: null,
        fabric_type: "",
        machine_id: "",
        brand: "",
        po_number: "",
    }

    const [fabric, setFabric] = useState(initialize);
    const [submitted, setSubmitted] = useState(false);
    // const [fabric_, setFabric_] = useState([]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFabric({ ...fabric, [name]: value });
        console.log(value)
    }

    const saveFabric = () => {
        var data = {
            fabric_type: fabric.fabric_type,
            machine_id: fabric.machine_id,
            brand: fabric.brand,
            po_number: fabric.po_number
        };

        ServiceFabric.create(data).then(res => {

            setFabric({
                id: res.data.id,
                fabric_type: res.data.fabric_type,
                machine_id: res.data.machine_id,
                brand: res.data.brand,
                po_number: res.data.po_number
            });

            setSubmitted(true);
            // console.log(console.data);
        })
            .catch(e => {
                console.log(e);
            });
    };

    // useEffect(async () => {
    //     const result = await ServiceFabric.getAll();
    //     const data_ = result.data.data
    //     setFabric_(data_)
    // })

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
                </div>
                {/* /.page-header */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="row">
                            <div className="col-xs-12 col-sm-12">
                                <div className="widget-box">
                                    <div className="widget-header">
                                        <h4 className="widget-title">Masked Input</h4>
                                        <span className="widget-toolbar">
                                            <a href="#" data-action="settings">
                                                <i className="ace-icon fa fa-cog" />
                                            </a>
                                            <a href="#" data-action="reload">
                                                <i className="ace-icon fa fa-refresh" />
                                            </a>
                                            <a href="#" data-action="collapse">
                                                <i className="ace-icon fa fa-chevron-up" />
                                            </a>
                                            <a href="#" data-action="close">
                                                <i className="ace-icon fa fa-times" />
                                            </a>
                                        </span>
                                    </div>
                                    <div className="widget-body">
                                        <div className="widget-main">

                        <div className="submit-form">
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-12-xs col-12-md col-12-sm">
                                        <div className="row">
                                            <div className="col-md-12 col-xs-12 col-sm-6">
                                                <div className="from-group">
                                                    <label htmlFor="fabric-type">Fabirc Type</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="fabric_type"
                                                        required value={fabric.fabric_type}
                                                        onChange={handleInputChange}
                                                        name="fabric_type"
                                                        autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-xs-12 col-sm-6">
                                                <div className="from-group">
                                                    <label htmlFor="machine_id">Machine Type</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="machine_id"
                                                        required value={fabric.machine_id}
                                                        onChange={handleInputChange}
                                                        name="machine_id"
                                                        autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-md-12  col-xs-12 col-sm-6">
                                                <div className="from-group">
                                                    <label htmlFor="brand">Brand</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="brand"
                                                        required value={fabric.brand}
                                                        onChange={handleInputChange}
                                                        name="brand"
                                                        autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-xs-12  col-sm-6">
                                                <div className="from-group">
                                                    <label htmlFor="po_number">PO Number</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="po_number"
                                                        required value={fabric.po_number}
                                                        onChange={handleInputChange}
                                                        name="po_number"
                                                        autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-xs-12 col-sm-12">
                                                <div className="form-inline pull-right">
                                                    <div className="btn-group">
                                                    <hr/>
                                                    <a href="/fabric/list" className="btn btn-sm btn-primary">
                                                        Back
                                                    </a>
                                                    <button onClick={saveFabric} style={{ width: "60px;" }} className="btn btn-sm btn-success">
                                                        Submit
                                                    </button>
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
                            </div>{/* /.span */}
                        </div>
                    </div>
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
                    </div>
                </div>
            </div>
        </div>

    )
}


export default CreateIndex;