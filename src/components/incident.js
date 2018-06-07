import React, { Component } from 'react';
import moment from 'moment';

class Incident extends Component {
    render() {
        return(
            <div className="card rounded-0">
                <a href="" style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="card-body">
                        <div className="float-right text-muted font-italic">
                            {moment(this.props.date).format('ll')}
                        </div>
                        <h7 className="card-title">{this.props.type}</h7>
                        <h6 className="card-title">{this.props.country}</h6>
                        <p className="card-text">{this.props.summary}</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default Incident;