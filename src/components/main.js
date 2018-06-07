import React, { Component } from 'react';
import Incident from './incident'

class Main extends Component {
    render() {
        return(
            <main className="container-fluid">
                <Incident />
            </main>
        );
    }
}

export default Main;