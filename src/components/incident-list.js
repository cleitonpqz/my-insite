import React, { Component } from 'react';
import Incident from './incident';

class IncidentList extends Component {
    render() {
        var list = this.props.incidents.map(function(incidentProps){
            return <Incident {...incidentProps} />
        });

        return(
            <div className="col">
                {list}
            </div>
        );
    }
}

export default IncidentList;