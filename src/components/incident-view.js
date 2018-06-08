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
                <div className="row text-white pl-3 pt-1" style={{height: '10%'}} >
                    <div className="form-group mb-0">
                        <span>Region</span>
                        <select className="form-control bg-secondary border-secondary text-white p-0" id="exampleFormControlSelect1">
                            <option>Americas    </option>
                            <option>Asia</option>
                            <option>Europe</option>
                            <option>Africa</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col bg-white py-3">
                        <button className="btn btn-secondary btn-sm float-right" type="submit" onClick={this.handleClick} >
                            <i className={"fas fa-check fa-fw " + (this.state.reviewed ? "visible" : "invisible")}></i>
                            <span className="ml-1">Mark as Reviewed</span>
                        </button>

                        <div className="row mb-5 ml-1">
                            <div className="col-10 border-bottom p-0" style={{borderBottomWidth: '2px'}} >
                                <div className="row p-0">
                                    <div className="col-1 bg-secondary text-center">
                                        <i className="fas fa-thermometer-empty text-white" style={{margin: -3}} ></i>
                                    </div>
                                    <div className="col-2">Low</div>
                                    <div className="col">
                                        <h6 className="float-right">Incident #99999 (Manual)</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-7 border-right">
                                <h6>Industry, Crime</h6>
                                <p><span className="badge badge-secondary">No Sub-Categories</span></p>

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

                                <p className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="nearMiss" />
                                    <label className="form-check-label" for="nearMiss">
                                        Near Miss
                                    </label>
                                </p>

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

                    <div className="col-4">
                        <div className="row" >
                            <div className="card text-center text-white bg-secondary border-0 mt-3 w-100" >
                                <div className="card-text"><i className="fas fa-bullseye fa-5x"></i></div>
                                <div className="card-body">
                                    <p className="card-text">No Properties in Proximity</p>
                                    <h3 className="card-text">Saint Lucia</h3>
                                </div>
                                <img className="card-img-bottom" src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=400x400&maptype=roadmap&key=AIzaSyBHqOsq3OIQoxKexk9zZsAxOG-gzuo5QGk" />
                            </div>

                            <table className="table table-borderless table-sm text-white">
                                <tbody>
                                    <tr>
                                        <th scope="row">ExxonMobil Properties</th>
                                        <td className="text-right">2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ExxonMobil Head Count</th>
                                        <td className="text-right"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Threat Level</th>
                                        <td className="text-right">Not Rated</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="text-center w-100 text-white"><h6>Nearest Properties</h6></div>
                            <table className="table table-borderless table-sm text-white">
                                <tbody>
                                    <tr>
                                        <th scope="row">Brooklin</th>
                                        <td className="text-right">5.20 mi / 8.36 km</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bronx</th>
                                        <td className="text-right">14.90 mi / 23.97 km</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IncidentView;