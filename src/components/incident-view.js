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
            <div className="col" id="incident-view" >
                <div className="row">
                    <div className="col bg-white py-3">
                        <button className="btn btn-primary btn-sm float-right" type="submit" onClick={this.handleClick} >
                            <i className={"fas fa-check fa-fw " + (this.state.reviewed ? "visible" : "invisible")}></i>
                            <span className="ml-1">Mark as Reviewed</span>
                        </button>

                        <div className="row mb-5 ml-1">
                            <div className="col-9 border-bottom">Incident #99999 (Manual)</div>
                        </div>

                        <div className="row">
                            <div className="col-7 border-right">
                                <h6>Industry, Crime</h6>
                                <p>Badge space</p>

                                <h6>Description</h6>
                                <p>Created</p>

                                <h6>Company Commentary</h6>
                                <p>Created</p>

                                <div className="row">
                                    <div className="col">
                                        <small>Target</small>
                                        <p className="font-italic">None selected.</p>

                                        <small>Actor</small>
                                        <p className="font-italic">None selected.</p>

                                        <small>Actor Description</small>
                                        <p className="font-italic">None selected.</p>
                                    </div>
                                    <div className="col">
                                        <small>Attack Type</small>
                                        <p>Airstrike</p>

                                        <small>Assets</small>
                                        <p className="font-italic">None selected.</p>

                                        <small>Sectors</small>
                                        <p className="font-italic">None selected.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <small>Incident Date</small>
                                <p>Jun 5, 2018</p>

                                <small>Location</small>
                                <p>
                                    City: Curitiba <br />
                                    Lat: 13.4624986 <br />
                                    Lon: 56.5461315 <br />
                                </p>

                                <small>Precision</small>
                                <p className="font-italic">None selected.</p>

                                <small>Impact</small>
                                <p className="font-italic">None selected.</p>

                                <small>Keywords</small>
                                <p></p>

                                <small>Source Links</small>
                                <p></p>

                                <small>System Information</small>
                                <p>
                                    Created On: Jun 5, 2018 <br />
                                    Creaded By: Cleiton Queiroz <br />
                                    Last Reviewed On: Unknown <br />
                                    Last Reviewed By: Unknown <br />
                                    Last Updated On: Unknown <br />
                                    Last Updated OBy: Unknown <br />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">Test</div>
                </div>
            </div>
        );
    }
}

export default IncidentView;