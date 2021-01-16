import React, { useState, useEffect } from 'react';
import ServiceFabric from '../.././../services/service';
import MUIDataTable  from 'mui-datatables';
import {Link} from 'react-router-dom';

const Index = () => {
    const [fabric_, setFabric_] = useState([]);

    useEffect(async () => {
        const result = await ServiceFabric.getAll();
        const data_ = result.data.data
        setFabric_(data_)
    })

    // const classes = useStyles();
    
    const columns = [
        {
            name: "id",
            label: "No",
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: "fabric_type",
            label: "Fabric Type",
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: "machine_id",
            label: "Machine",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "po_number",
            label: "Po Number",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "id",
            label: "Actions",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    console.log(value, tableMeta);
                    return (<button className="btn btn-primary btn-sm"><i className="fa fa-eye"></i></button>);
                }
            }
        }
    ];

    const options = {
        // filterType: "checkbox",
        filterType: "dropdown",
        responsive: "stacked",
        onRowsDelete: rowsDeleted => {
            // axios.delete('http://127.0.0.1:8000/api/inventory/deleteAll/' + id).then(result => {
            // })
            // console.log(result.data[0].dataIndex);
            // console.log(rowsDeleted, "were deleted!");
        }
    };

    return (<div>
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
                <div className="col-xs-12">
                {/* <div className="pull-right form-group">
                    <button className="btn btn-sm btn-primary">New Fabric</button>
                </div> */}
                {/* PAGE CONTENT BEGINS */}
                    {/* <table className="table table-bordered table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Fabric Types</th>
                                <th>Brand</th>
                                <th>PO Number</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fabric_.map((row) => {
                                return (<tr>
                                    <td>{row.id}</td>
                                    <td>{row.fabric_type}</td>
                                    <td>{row.brand}</td>
                                    <td>{row.po_number}</td>
                                    <td>{row.created_at}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table> */}
                    <MUIDataTable className="table table-boredered"
                        title={
                            <div>
                                {" "}
                                <Link to="add-inventory">
                                    <button className="btn btn-primary btn-sm">New</button>
                                </Link>{" "}
                            </div>
                        }
                        data={fabric_}
                        columns={columns}
                        options={options}
                    />{" "}
                    {/* PAGE CONTENT ENDS */}
                </div>
                {/* /.col */}
            </div>
            {/* /.row */}
        </div>
        {/* /.page-content */}
    </div>)
}

export default Index