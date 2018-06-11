import React, { Component } from 'react';
import IncidentList from './incident-list';
import IncidentView from './incident-view';

class Main extends Component {
    render() {
        return(
            <main className="container-fluid p-0">
                <div id="incident-container" className="d-flex align-items-stretch">
                    <IncidentList />
                    <IncidentView />
                </div>
            </main>
        );
    }
}

export default Main;