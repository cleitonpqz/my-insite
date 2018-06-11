import React, { Component } from 'react';

import Property from './property';



class NearestProperties extends Component {
    constructor(props){
        super(props);
        this.state = {nearestProperties: []}
    }

    componentDidUpdate(prevProps) {
        if (this.props.nearestProperties !== prevProps.nearestProperties)
            this.setState({nearestProperties: this.props.nearestProperties});
    }

    render() {
        var list = this.state.nearestProperties.map(function(property){
            return <Property {...property} />
        }.bind(this));
        return (
            <div className="w-100">
                <div className="text-center w-100 text-white"><h6>Nearest Properties</h6></div>
                <table className="table table-borderless table-sm text-white">
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default NearestProperties;