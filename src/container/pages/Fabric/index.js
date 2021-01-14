import React from 'react';
import axios from 'axios';

class Index extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { fabric: '' };
      }

    componentDidMount() {
        var baseUri = 'http://localhost:8000/api/fabric';
        axios.get(baseUri).then(result => {
            var res = result.data.data;
            this.setState(
                this.state.fabric = res);
        })
    }

    render() {
        return <h1>x</h1>;
      }
}

export default Index