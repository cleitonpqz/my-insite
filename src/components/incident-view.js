import React, { Component } from 'react';

class IncidentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewed: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({reviewed: !this.state.reviewed});
    }

    render() {
        return(
            <div className="col border rounded py-3">
                <button className="btn btn-primary float-right" type="submit" onClick={this.handleClick} >
                    <i className={"fas fa-check fa-fw " + (this.state.reviewed ? "visible" : "invisible")}></i>
                    Mark as Reviewed
                </button>
                
            </div>
        );
    }
}

export default IncidentView;