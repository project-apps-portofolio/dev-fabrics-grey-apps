import React from 'react';
import PropsTwoIndex from './page2';
import { Link } from 'react-router-dom';

class PropsIndex extends React.Component {
    render() {

        function Welcome(props) {
            return <h1>Hellow , {props.name}</h1>
        }
        
        // Class Props
        const Detail = (props) => {
            return (
                <div className="page-item">
                    <ul className="item-blue">
                        <li>{props.name}</li>
                        <li>{props.address}</li>
                        <li>{props.city}</li>
                        <li>{props.phone}</li>
                    </ul>
                </div>
            )
        }
        return (
            <div className="page-content">
                <div className="page-header">
                    Component Props
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <div className="widget-box">
                            <Welcome 
                                name="Props Send" />
                            <Detail 
                                name="Props Send"
                                address="Jalan Bandung"
                                city="Bandung"
                                phone="02231231" />
                                <Link to={{
                                    pathname: "/learning/test",
                                    data : {
                                        name: 'Props Send',
                                        address: 'Jalan Bandung',
                                        city: 'Bandung',
                                        phone: '02231231',
                                    }
                                }}>Show</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PropsIndex;