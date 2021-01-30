import React from 'react';
import '../../../assets/css/jquery.dataTables.css';
import Service from '../../../services/service';
import ServiceCustomer from '../../../services/serviceCustomer';
import { Link } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import Modal from 'react-modal';
const $ = require('jquery')
class TblCustomer extends React.Component {

    constructor(props) {
        super(props);
            this.buttonDelete = this.buttonDelete.bind(this);
            this.state = {
                customers:[]
            }
    }

    async getCustomers() {
        const result = await Service.getCustomer();
        this.setState({ customers: result.data.result });
    }


    componentDidMount() {
        this.getCustomers().then(() => this.sync());
    }

    buttonDelete = (id) => {
        const data = ServiceCustomer.deleteCustomer(id);
        window.location.reload();
    }

    sync() {

        this.$el = $(this.el);
        this.$el.DataTable({
            dom: '<"data-table-wrapper">',
            data: this.state.customers, //option 1
            // 'code',
            // 'name',
            // 'nomor_pelanggan',
            // 'short_name',
            // 'address',
            // 'city',
            // 'post_code',
            // 'director_name',
            // 'employee_name',
            // 'phone',
            // 'fax',
            // 'mobile_phone',
            columns: [
                { title: "No", data: "id" },
                { title: "Customer Name", data: "name" },
                { title: "Code", data: "code" },
                { title: "Nomor Pelanggan", data: "nomor_pelanggan" },
                { title: "Short Name", data: "short_name" },
                { title: "Create", data: "created_at" },
                { title: "Update", data: "updated_at" },
                { title: "Action", data: null },

            ],
            "order": [[0, "asc"]],
            columnDefs: [
                {
                    targets: [7],
                    width: 100,
                    className: "center",
                    createdCell: (td, cellData, rowData) =>
                        ReactDOM.render(
                            <div>
                                <div className="form-inline">
                                    <div className="form-group">
                                        <a href="#"><i className="fa fa-eye ace-icon bigger-130"></i></a>&nbsp;
                                   </div>
                                    <div className="form-group">
                                        <a href="#" className="green"><i className="fa fa-pencil ace-icon bigger-130"></i></a>
                                    </div>
                                    <div className="form-group">
                                        <a href="#" onClick={() => this.buttonDelete(rowData.id)} className="red"><i className="fa fa-trash ace-icon bigger-130"></i></a>
                                    </div>
                                </div>
                            </div>                             
                            , td
                        ),
                }
            ]
        });
    }

    render() {
        return (
            <div>
                <table
                    className="table table=bordered table-stripped table-hover table-responsive display"
                    width="100%"
                    cellSpacing="0"
                    ref={(el) => (this.el = el)}
                ></table>
            </div>
        )
    }
}

export default TblCustomer;