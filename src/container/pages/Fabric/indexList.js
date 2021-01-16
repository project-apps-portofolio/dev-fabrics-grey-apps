import React from 'react';

import '../../../assets/css/jquery.dataTables.css';
import ServiceFabric from '../.././../services/service';

const $ = require('jquery')
$.Datatable = require('datatables.net')


class IndexList extends React.Component {

    constructor() {
        super();
            this.state = {
                fabric: []
            };
    }

    componentDidMount() {
        // console.log(this.el);
        // $('#fabric-table');

        ServiceFabric.getAll().then(res => {
            var result = res.data.data;
            this.setState({ fabric: result });
        })

        this.$el = $('#fabric-table')
            this.$el.DataTable(
                {
                    data: this.state.fabric,
                    columns: [
                        { title: "Name", data: "id" },
                        { title: "Position", data: "fabric_type" },
                        { title: "Office" },
                        { title: "Extn." },
                        { title: "Start date" },
                        { title: "Salary" },
                    ]
                }
            )
    }

    render() {
        return (
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
                <div className="row" >
                    <div className="col-xs-12">
                        <table className="display" width="100%" id="fabric-table" ref={el => this.el = el} >
                        </table>
                        <table  className="table">
                            <thead>
                                <tr>
                                    <th>asd</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.fabric.map(res => {
                                        return <tr>
                                            <td>{res.id}</td>
                                        </tr>
                                    })}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


export default IndexList;