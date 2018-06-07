import React, { Component } from 'react';
import moment from 'moment';

class Incident extends Component {
    render() {
        return(
            <a href="" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="card">
                    <div className="card-body">
                        <div className="float-right text-muted font-italic">{moment(this.props.date).format('ll')}</div>
                        <h6 className="card-title">{this.props.type}</h6>
                        <h5 className="card-title">{this.props.country}</h5>
                        <p className="card-text">{this.props.summary}</p>
                    </div>
                </div>
            </a>
        );
    }
}

export default Incident;