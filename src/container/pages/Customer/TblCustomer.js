import React from 'react';

class TblCustomer extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                customers:[]
            }
    }
    render() {
        return (
            <div>
                <h1>Table</h1>
            </div>
        )
    }
}

export default TblCustomer;