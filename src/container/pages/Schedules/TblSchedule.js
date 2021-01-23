import React from 'react';
import Service from '../.././../services/service';
import '../../../assets/css/jquery.dataTables.css'
import { Link } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import Modal from 'react-modal';
const $ = require('jquery')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


class TblSchedule extends React.Component {

    constructor(props) {
        super(props);
        // this.submit = this.submit.bind(this);
        this.state = {
            schedule: [],
            modalIsOpen: false,
            date: '',
            id: 0,
            description: '',
            end: '',
            is_all_day: '',
            job_id: 0,
            machine_id: 0,
            owner_id: 0,
            start: "",
            title: "",
            navigate: false,
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    openModal = schedule => {
        console.log(schedule);
        this.setState({
            modalIsOpen: true,
            date: schedule.date,
            id: schedule.id,
            description: schedule.description,
            end: schedule.end,
            is_all_day: schedule.is_all_day,
            job_id: schedule.job_id,
            machine_id: schedule.machine_id,
            owner_id: schedule.owner_id,
            start: schedule.start,
            title: schedule.title,
        })
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
        })
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
                            <div>
                                <button className="btn btn-sm btn-primary" onClick={() => this.openModal(rowData)}><i className="fa fa-eye ace-icon bigger-130"></i></button>&nbsp;
                                <button className="btn btn-sm btn-success"><i className="fa fa-table ace-icon bigger-130"></i></button>
                            </div>
                            // <button onClick={() => this.setState({ navigate: true })}></button>                               
                            , td
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

    render() {
        return (
            <div key="un">
                <table
                    className="table table=bordered table-stripped table-hover table-responsive display"
                    width="100%"
                    cellSpacing="0"
                    ref={(el) => (this.el = el)}
                ></table>

                <Modal isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal} style={customStyles}
                    contentLabel="Modal" ariaHideApp={false}  >
                    <div className="page-content">
                            <div className="form-group">
                                <div className="pull-right">
                                    {/* <div className="form-group">
                                        <button className="btn btn-sm btn-primary">Tambah Jadwal</button>
                                    </div>
                                    &nbsp; */}
                                    <div className="form-group">
                                        <button className="btn btn-sm btn-primary" onClick={this.closeModal}>Close</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Job</th>
                                <th>Machine</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.id}</td>
                                <td>{this.state.date}</td>
                                <td>{this.state.title}</td>
                                <td>{this.state.description}</td>
                                <td>{this.state.start}</td>
                                <td>{this.state.end}</td>
                                <td>{this.state.job_id}</td>
                                <td>{this.state.machine_id}</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <div className="col-xs-12">
                        <div className="hr dotted" />
                        <div>
                            <div id="user-profile-1" className="user-profile row">
                                <div className="col-xs-12 col-sm-3 center">
                                    <div>
                                        <span className="profile-picture">
                                            <img id="avatar" className="editable img-responsive" alt="Alex's Avatar" src="/ace-master/assets/images/avatars/profile-pic.jpg" />
                                        </span>
                                        <div className="space-4" />
                                        <div className="width-80 label label-info label-xlg arrowed-in arrowed-in-right">
                                            <div className="inline position-relative">
                                                <a href="#" className="user-title-label dropdown-toggle" data-toggle="dropdown">
                                                    <i className="ace-icon fa fa-circle light-green" />
                                                    &nbsp;
                <span className="white">Alex M. Doe</span>
                                                </a>
                                                <ul className="align-left dropdown-menu dropdown-caret dropdown-lighter">
                                                    <li className="dropdown-header"> Change Status </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="ace-icon fa fa-circle green" />
                                                            &nbsp;
                    <span className="green">Available</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="ace-icon fa fa-circle red" />
                                                            &nbsp;
                    <span className="red">Busy</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="ace-icon fa fa-circle grey" />
                                                            &nbsp;
                    <span className="grey">Invisible</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-6" />
                                    <div className="profile-contact-info">
                                        <div className="profile-contact-links align-left">
                                            <a href="#" className="btn btn-link">
                                                <i className="ace-icon fa fa-plus-circle bigger-120 green" />
                                                Add as a friend
            </a>
                                            <a href="#" className="btn btn-link">
                                                <i className="ace-icon fa fa-envelope bigger-120 pink" />
                                                Send a message
            </a>
                                            <a href="#" className="btn btn-link">
                                                <i className="ace-icon fa fa-globe bigger-125 blue" />
                                                www.alexdoe.com
            </a>
                                        </div>
                                        <div className="space-6" />
                                        <div className="profile-social-links align-center">
                                            <a href="#" className="tooltip-info" title data-original-title="Visit my Facebook">
                                                <i className="middle ace-icon fa fa-facebook-square fa-2x blue" />
                                            </a>
                                            <a href="#" className="tooltip-info" title data-original-title="Visit my Twitter">
                                                <i className="middle ace-icon fa fa-twitter-square fa-2x light-blue" />
                                            </a>
                                            <a href="#" className="tooltip-error" title data-original-title="Visit my Pinterest">
                                                <i className="middle ace-icon fa fa-pinterest-square fa-2x red" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hr hr12 dotted" />
                                </div>
                                <div className="col-xs-12 col-sm-9">
                                    <div className="space-12" />
                                    <div className="profile-user-info profile-user-info-striped">
                                        <div className="profile-info-row">
                                            <div className="profile-info-name">Title Jobs</div>
                                            <div className="profile-info-value">
                                                <span className="editable" id="username">{this.state.title}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> Description </div>
                                            <div className="profile-info-value">
                                                <span className="editable" id="country">{this.state.description}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> Jobs </div>
                                            <div className="profile-info-value">
                                                <span className="editable" id="age">50{this.state.job_id}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> Machine </div>
                                            <div className="profile-info-value">
                                                <span className="editable" id="signup">{this.state.machine_id}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name">Start</div>
                                            <div className="profile-info-value">
                                                <span className="editable" id="login">{this.state.start}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> About Me </div>
                                            <div className="profile-info-value">
                                                <span className="editable" id="about">{this.state.end}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Modal>
            </div >
        )
    }
}
export default TblSchedule;

