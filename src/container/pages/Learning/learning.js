import React from 'react';
import { Link } from 'react-router-dom';

class LearningIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        function formatName(user) {
            return user.firstName + '-' + user.lastName;
        }

        const user = {
            firstName: 'Ilyas',
            lastName: 'Yasin'
        }

        const ListLearning = () => {
            return (
                <div>
                    <li><Link to="/learning/jsx">Learning Jsx</Link></li>
                    <li><Link to="/learning/rendering-element">Learning Rendering Elements</Link></li>
                    <li><Link to="/learning/props">Learning Component Props</Link></li>
                    <li><Link to="/learning/life-cycle">Learning State LifeCycle</Link></li>
                    <li><Link to="/learning/handling-event">Learning Handling Event</Link></li>
                    <li><Link to="/learning/conditional-render">Learning Conditional Rendering</Link></li>
                    <li><Link to="/learning/list-key">Learning Lists and Keys</Link></li>
                    <li><Link to="/learning/form">Learning Forms</Link></li>
                    <li><Link to="/learning/state">Learning Lifting State Up</Link></li>
                    <li><Link to="/learning/composition">Learning Composition vs Inheritance</Link></li>
                    <li><Link to="/learning/thinking">Learning Thinking In React</Link></li>
                </div>
            )
        }

        const Form = () => {
            return (
                <div className="widget-box">
                    <div className="widget-body">
                        <div className="widget-header widget-header-flat">
                            <h4 className="widget-title">List Learning React</h4>
                        </div>
                        <div className="widget-main">
                            <hp>
                                Hello, {formatName(user)}!
                    </hp>
                            <br />
                            <div className="widget-box">
                                <ul style={{ marginTop: 20 }}>
                                    <ListLearning />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div class="page-content">
                <div className="page-header">
                    <h1>Learning React JS</h1>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xs-12 col-md-12">
                        <Form />
                    </div>
                </div>
            </div>
        )
    }
}

export default LearningIndex;