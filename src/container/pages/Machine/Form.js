import React, { useState, useEffect } from 'react';
import ServiceFabric from '../.././../services/service';
import { Link } from 'react-router-dom';

const FormMachine = () => {
    const initialize = {
        id: null,
        name: "",
        short_name: "",
        type_machine: "",
    }

    const [machine_, setMachine] = useState(initialize);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setMachine({ ...machine_, [name]: value });
    }

    const saveMachine = () => {
        var data = {
            name: machine_.name,
            short_name: machine_.short_name,
            type_machine: machine_.type_machine,
        };

        ServiceFabric.createMachine(data).then(res => {
            console.log(res);
        })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
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
                                                    <label htmlFor="name-type">Machine Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="name"
                                                        required value={machine_.name}
                                                        onChange={handleInputChange}
                                                        name="name"
                                                        autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-xs-12 col-sm-6">
                                                <div className="from-group">
                                                    <label htmlFor="short_name">Short Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="short_name"
                                                        required value={machine_.short_name}
                                                        onChange={handleInputChange}
                                                        name="short_name"
                                                        autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-md-12  col-xs-12 col-sm-6">
                                                <div className="from-group">
                                                    <label htmlFor="brand">Type Machine</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="type_machine"
                                                        required value={machine_.type_machine}
                                                        onChange={handleInputChange}
                                                        name="type_machine"
                                                        autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-xs-12 col-sm-12">
                                                <div className="form-inline pull-right">
                                                    <div className="btn-group">
                                                        <hr />
                                                        <button className="btn btn-sm btn-success" onClick={saveMachine}>
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
        </div>

    )
}


export default FormMachine;