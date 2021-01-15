import React, { useState } from 'react';
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
            console.log(console.data);
        })
            .catch(e => {
                console.log(e);
            });
    };

    const newFabric = () => {
        setFabric(initialize);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h1>Submit</h1>
                    <button className="btn btn-sm btn-primary" onClick={newFabric}>Add</button>
                </div>
            ) : (
                    <div>
                        <div className="card">
                            <div className="card-body">
                            <div className="col-12-xs col-12-md col-12-sm">
                            <div className="row">
                                <div className="col-md-12 col-sm-6">
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
                                <div className="col-md-12 col-sm-6">
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
                                <div className="col-md-12 col-sm-6">
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
                                <div className="col-md-12 col-sm-6">
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
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <button onClick={saveFabric} className="btn btn-sm btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}


export default CreateIndex;