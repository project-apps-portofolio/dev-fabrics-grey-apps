import React from 'react';
import Service from '../.././../services/service';
import '../../../assets/css/jquery.dataTables.css'
import { Link } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import Modal from 'react-modal';
const $ = require('jquery')

class TblJob extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }

    async getJobs() {
        const result = await Service.getJob();
        this.setState({ jobs: result.data.result });
    }


    componentDidMount() {
        this.getJobs().then(() => this.sync());
    }

    sync() {

        this.$el = $(this.el);
        this.$el.DataTable({
            dom: '<"data-table-wrapper">',
            data: this.state.jobs, //option 1
            // data: this.getmachineData1(), //option 2
            columns: [
                { title: "No", data: "id" },
                { title: "Process Number", data: "process_number" },
                { title: "PO Number", data: "po_number" },
                { title: "Create", data: "created_at" },
                { title: "Update", data: "updated_at" },
                { title: "Action", data: null },

            ],
            "order": [[0, "asc"]],
            columnDefs: [
                {
                    targets: [5],
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
                                        <a href="#" className="red"><i className="fa fa-trash ace-icon bigger-130"></i></a>
                                    </div>
                                </div>
                            </div>
                            // <button onClick={() => this.setState({ navigate: true })}></button>                               
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

export default TblJob