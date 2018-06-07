import React, { Component } from 'react';

class Incident extends Component {
    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <div className="float-right text-muted font-italic">Date</div>
                    <h6 className="card-title">Crime</h6>
                    <h5 className="card-title">Venezuela</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        );
    }
}

export default Incident;