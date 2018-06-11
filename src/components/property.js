import React, { Component } from 'react';

class Property extends Component {
    render() {
        return(
            <tr>
                <th scope="row">{this.props.property}</th>
                <td className="text-right">{this.props.distance.miles} mi / {this.props.distance.km} km</td>
            </tr>
        );
    }
}

export default Property;