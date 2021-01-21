import React from 'react';
import Service from '../.././../services/service';
import '../../../assets/css/jquery.dataTables.css'
import { Link } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
const $ = require('jquery')
$.Datatable = require('datatables.net')

class TblSchedule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schedule: []
        }
    }

    async getSchedule() {
        const res = await Service.getSchedule();
        // console.log(res);
        // console.log(res.data.data);
        this.setState({ loading: false, schedule: res.data });
    }

    componentDidMount() {
        this.getSchedule().then(() => this.sync());

        function populateLinks(node) {
            ReactDOM.render(<Link to="/schedules">Hello</Link>, node);
        }
        $('.link-div').get().forEach(populateLinks);
    }

    sync() {
        this.$el = $(this.el);
        this.$el.DataTable({
            dom: '<"data-table-wrapper">',
            data: this.state.schedule, //option 1
            // data: this.getmachineData1(), //option 2
            columns: [
                { title: "No", data: "id" },
                { title: "Machine Name", data: "date" },
                { title: "Action", data: null },

            ],
            "order": [[0, "asc"]],
            columnDefs: [
                {
                    targets: [2],
                    width: 100,
                    className: "center",
                    createdCell: (td, cellData, rowData) =>
                        ReactDOM.render(
                            <Link to="schedule/show/">Update {rowData.id}</Link>, td
                        ),
                }
            ]
        });
    }

    componentWillUnmount() {
        $('.display')
            .find('table')
            .DataTable()
            .destroy(true);
    }
    // reloadTableData = (data) => {
    //     const table = $('.display').find('table').DataTable();
    //     table.clear();
    //     table.rows.add(data);
    //     table.draw();
    // }


    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.schedule.length !== this.props.schedule.length) {
    //         this.reloadTableData(nextProps.schedule);
    //     } return false;
    // }



    render() {
        return (
            <div key="un">
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

export default TblSchedule;
