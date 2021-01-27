import React from 'react';
import Servicemachine from '../.././../services/service';
import '../../../assets/css/jquery.dataTables.css'
const $ = require('jquery')
$.Datatable = require('datatables.net')

class TblMachine extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                machine: []
            }
    }

    async getMachine() {
        const res = await Servicemachine.getMachine();
        // console.log(res.data.data);
        this.setState({ loading: false, machine: res.data.data });
    }

    componentDidMount() {
        this.getMachine().then(() => this.sync());
        this.timer = setInterval(5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    sync() {
        this.$el = $(this.el);
        this.$el.DataTable({
            data: this.state.machine, //option 1
            // data: this.getmachineData1(), //option 2
            columns: [
                { title: "No", data: "id" },
                { title: "Machine Name", data: "name" },
                { title: "Short Name", data: "short_name" },
                { title: "Type", data: "type_machine" },
                
            ],
        });
    }



    render() {
        return (
            <div key="un">
                <table
                    className="table table=bordered table-stripped table-hover table-responsive"
                    width="100%"
                    ref={(el) => (this.el = el)}
                ></table>
            </div>
        )
    }
}

export default TblMachine;
