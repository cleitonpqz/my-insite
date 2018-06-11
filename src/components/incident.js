import React, { Component } from 'react';
import moment from 'moment';

class Incident extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return(
            <div className="card rounded-0 w-100">
                <a href="" onClick={this.handleClick} style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="card-body">
                        <div className="float-right text-muted font-italic">
                            {moment(this.props.date).format('ll')}
                        </div>
                        <p className="card-title">{this.props.categories ? this.props.categories.join(", ") : ''}</p>
                        <h6 className="card-title">{this.props.country}</h6>
                        <p className="card-text">{this.props.summary}</p>
                    </div>
                </a>
            </div>
        );
    }

    handleClick(e) {
        e.preventDefault();
        this.props.whenItemClicked(this.props.id);
    }
}

export default Incident;