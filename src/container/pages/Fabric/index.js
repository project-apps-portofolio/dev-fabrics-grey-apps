import React, {useState, useEffect} from 'react';
import ServiceFabric from '../.././../services/service';

const Index = () => {
    const [fabric_, setFabric_] = useState([]);

    useEffect( async () => {
        const result = await ServiceFabric.getAll();
        const data_ = result.data.data
        setFabric_(data_)
    })

    return ( <div>
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
                    {/* PAGE CONTENT BEGINS */}

                            <table className="table table-boreder table-stripped table-hover">
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
                            </table>
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