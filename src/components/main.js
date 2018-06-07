import React, { Component } from 'react';
import IncidentList from './incident-list';
import IncidentView from './incident-view';

import incidents from './data/incidents.json';

class Main extends Component {
    render() {
        return(
            <main className="container-fluid">
                <div id="incident-container" className="d-flex align-items-stretch">
                    <IncidentList {...incidents}  />
                    <IncidentView />
                </div>
            </main>
        );
    }
}

export default Main;