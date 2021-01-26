import React from 'react';
import Select from 'react-select';
import Service from '../.././../services/service';
import { DateTimePicker, DropdownList } from 'react-widgets'
const moment = require('moment');

const date = moment().format('YYYY-MM-dd');


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  

class ScheduleCreate extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                machine: [],
                BIRTH_OF_DATE: moment().format("yyyy-MM-d")
            }
    }

    async getMachine() {
        const res = await Service.getMachine().then(res => {
            this.setState({ machine: res.data.data });
        });

        // console.log(this.props.initialValue);
        // console.log(res.data.data);
    }

    componentDidMount() {
        this.getMachine();
        console.log(this.state.BIRTH_OF_DATE)
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };

    render() {
        return (
            <div className="page-content">
                <div className="page-header">
                    Jadwal Baru
                </div>
    
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="alert alert-info text-center" role="alert">
                                Perhatian!<br />
                                Karu bertanggungjawab mengisi Jam Mulai &amp; Jam Selesai Jadwalnya masing-masing.<br />
                                Proses yang sudah selesai harus di-update dengan Jam Mulai &amp; Jam Selesai aktual!
              </div>
    
                            {/* Content */}
    
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Tanggal </label>
                                    <div className="col-sm-9">
                                        <DateTimePicker
                                            // initialValue={new Date()}
                                            // value={this.state.value}
                                            // onChange={() => this.handleDate(this.state.initialValue)}
                                            defaultValue={new Date()}
                                            selected={this.state.BIRTH_OF_DATE}
                                              onChange={(newDate) => this.setState({BIRTH_OF_DATE: moment(newDate).format("yyyy-MM-dd")})}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1-1"> Urutan Mesin </label>
                                    <div className="col-sm-9">
                                        <label className="radio-inline">
                                            <input type="radio" name="radio-bot" checked/> Mesin 1
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="radio-bot" checked/> Mesin 2
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="radio-bot" checked/> Mesin 2
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="radio-bot" checked/> Mesin 2
                                        </label>
                                    </div>
                                </div>
                                <div className="space-4" />
                                <div className="form-group">
                                    <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1-1"> Nomor Jobs </label>
                                    <div className="col-sm-9">
                                    <Select onChange={this.handleChange} options={this.state.machine.map( e => ({ label: e.short_name, value: e.id}))} />
                                    </div>
                                </div>
                                <div className="space-4" />
                                <div className="form-group">
                                    <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1-1"> Catatan Timeline </label>
                                    <div className="col-sm-9">
                                        <input type="textarea" id="form-field-1-1" placeholder="Text Field" className="form-control" />
                                    </div>
                                </div>
                                <div className="clearfix form-actions">
                                    <div className="col-md-offset-3 col-md-9">
                                        <button className="btn btn-info" type="button">
                                            <i className="ace-icon fa fa-check bigger-110" />
                                            Submit</button>
                                        &nbsp; &nbsp; &nbsp;
                                        <button className="btn" type="reset">
                                            <i className="ace-icon fa fa-undo bigger-110" />
                                            Reset</button>
                                    </div>
                                </div>
                                <div className="hr hr-24" />
                            </form>
    
    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleCreate;