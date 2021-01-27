import React from 'react';
import Service from '../../../services/service';
import TblJob from './Tbljob';
import { Link } from 'react-router-dom';

class JobIndex extends React.Component {
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
        this.getJobs();
        this.timer = setInterval(5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="page-content">
                <div className="page-header">
                    <h1>Create Jobs</h1>
                </div>
                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="form-group pull-right">
                            <div className="btn-group">
                                <Link to="/jobs/create" className="btn btn-primary btn-sm pull-right">
                                    <i className="fa fa-plus">&nbsp; Tambah Jobs</i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <TblJob/>
                    </div>
                </div>
            </div>
        )
    }
}


export default JobIndex;