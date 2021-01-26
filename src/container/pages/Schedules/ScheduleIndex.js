import React from 'react';
import TblSchedule from './TblSchedule';
import Service from '../.././../services/service';
import { Link } from 'react-router-dom';
class ScheduleIndex extends React.Component {

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
        this.getSchedule();
        console.log(this.state.schedule)
    }

    deleteRow = (id) => { const filteredData = this.state.schedule.filter((i) => i.id !== id); this.setState({ schedule: filteredData }); };

    render() {
        return (
            <div className="page-content">
                <div className="page-header">
                    Index Schedules
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="form-group pull-right">
                            <div className="btn-group">
                                <Link to="/schedules/create" className="btn btn-primary btn-sm pull-right">
                                    <i className="fa fa-plus">&nbsp; Tambah Jadwal Timeline</i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <TblSchedule />
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleIndex;