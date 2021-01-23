import React, { useState, useEffect } from 'react';
import Service from '../.././../services/service';
const ScheduleShow = (props) => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        async function fecthApi() {
            const result = await Service.getIdSchedule();
            setSchedule(result.data);
        }
        fecthApi();
    }, [])
    return (
        <div>
             <div className="page-content">
                        <div className="form-group">
                            <div className="form-inline">
                                <div className="pull-right">
                                    <div className="form-group">
                                        <button className="btn btn-sm btn-primary">Tambah Jadwal</button>
                                    </div>
                                    &nbsp;
                                    <div className="form-group">
                                        <button className="btn btn-sm btn-primary" onClick={this.closeModal}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.id}</td>
                                <td>title</td>
                                <td>{this.state.description}</td>
                                <td>{this.state.is_all_day}</td>
                                <td>job_id</td>
                                <td>machine_id</td>
                                <td>owner_id</td>
                                <td>end</td>
                                <td>end</td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    )
}


export default ScheduleShow;