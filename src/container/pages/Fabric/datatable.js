import React from 'react';
import ServiceFabric from '../.././../services/service';
import '../../../assets/css/jquery.dataTables.css'
const $ = require('jquery')
$.Datatable = require('datatables.net')


class DatatableList extends React.Component {

    constructor(props) {
        super(props);
        // Submit dibawah untuk onclick function submit
        // this.submit = this.submit.bind(this);
        this.state = {
          fabric: [],
          loading: true,
        };
      }
    

    async getfabricData() {
        const res = await ServiceFabric.getAll();
        // console.log(res.data.data);
        this.setState({ loading: false, fabric: res.data.data });
      }

      componentDidMount() {
        this.getfabricData().then(() => this.sync());

        this.timer = setInterval(5000);
      }

      componentWillUnmount() {
        clearInterval(this.timer);
    }
    
      sync() {
        this.$el = $(this.el);
        this.$el.DataTable({
          data: this.state.fabric, //option 1
          // data: this.getfabricData1(), //option 2
          columns: [
            { title: "No" , data: "id"},
            { title: "Fabric Type", data: "fabric_type" },
            { title: "Machine No", data: "machine_id" },
            { title: "Brand", data: "brand" },
            { title: "Po Number", data: "po_number" },
            { title: "Date", data: "created_at" },
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
        );
      }
}


export default DatatableList;