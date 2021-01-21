import React from 'react';
import TblSchedule from './TblSchedule';
import Service from '../.././../services/service';
class ScheduleIndex extends React.Component{ 

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

    deleteRow = (id) => {  const filteredData = this.state.schedule.filter((i) =>  i.id !== id);  this.setState({schedule: filteredData});};

    render () {
        return (
            <div className="page-content">
                <div className="page-header">
                    Index Schedules
                </div>
    
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <TblSchedule/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleIndex;