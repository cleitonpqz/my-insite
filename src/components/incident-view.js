import React from 'react'
import Reflux from 'reflux';
import moment from 'moment';

import IncidentStore from '../stores/incident-store';
import IncidentActions from '../actions';

class IncidentView extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewed: false
        };
        this.store = IncidentStore;

        this.handleClick = this.handleClick.bind(this);
        this.handleNearMissCheckboxClicked = this.handleNearMissCheckboxClicked.bind(this);
    }

    handleClick(){
        let changedIncident = {...this.state.incident};
        changedIncident.reviewed = !this.state.incident.reviewed;
        this.setState({incident: changedIncident});
    }

    handleNearMissCheckboxClicked(){
        let changedIncident = {...this.state.incident};
        changedIncident.nearMiss = !this.state.incident.nearMiss;
        this.setState({incident: changedIncident});
    }

    renderNearesProperties() {
        if(this.state.incident && this.state.incident.nearestProperties) {
            this.state.incident.nearestProperties.map(function(data){
                return <tr>
                    <th scope="row">{data.property}</th>
                    <td className="text-right">{data.miles} mi / {data.km} km</td>
                </tr>
            });
        }
        return null;
    }

    componentDidMount() {
        IncidentActions.getIncident(1);
    }

    render() {
        return(
            <div className="col" id="incident-view" >
                <div className="row text-white pl-3 pt-1" >
                    <div className="form-group mb-0">
                        <span>Region</span>
                        <select value={this.state.incident.region} className="form-control bg-secondary border-secondary text-white p-0" id="exampleFormControlSelect1">
                            <option value="1">Americas</option>
                            <option value="2">Asia</option>
                            <option value="3">Europe</option>
                            <option value="4">Africa</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col bg-white py-3">
                        <button className="btn btn-secondary btn-sm float-right" type="submit" onClick={this.handleClick} >
                            <i className={"fas fa-check fa-fw " + (this.state.incident.reviewed ? "visible" : "invisible")}></i>
                            <span className="ml-1">Mark as Reviewed</span>
                        </button>

                        <div className="row mb-5 ml-1">
                            <div className="col-10 border-bottom p-0" style={{borderBottomWidth: '2px'}} >
                                <div className="row p-0">
                                    <div className="col-1 bg-secondary text-center">
                                        <i className="fas fa-thermometer-empty text-white" style={{margin: -3}} ></i>
                                    </div>
                                    <div className="col-2">{this.state.incident.temperature}</div>
                                    <div className="col">
                                        <h6 className="float-right">Incident #{this.state.incident.incidentNumber} (Manual)</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-7 border-right">
                                <h6>{this.state.incident.categories ? this.state.incident.categories.join(", ") : ''}</h6>
                                <p><span className="badge badge-secondary">{this.state.incident.subCategories !== undefined && this.state.incident.subCategories.length ? this.state.incident.subCategories.join(", ") : 'No Sub-Categories'}</span></p>

                                <h6>Description</h6>
                                <p>{this.state.incident.description}</p>

                                <h6>Company Commentary</h6>
                                <p>{this.state.incident.companyCommentary}</p>

                                <div className="row">
                                    <div className="col">
                                        <small>Target</small>
                                        <p className="font-italic">{this.state.incident.target}</p>

                                        <small>Actor</small>
                                        <p className="font-italic">{this.state.incident.actor}</p>

                                        <small>Actor Description</small>
                                        <p className="font-italic">{this.state.incident.actorDescription}</p>
                                    </div>
                                    <div className="col">
                                        <small>Attack Type</small>
                                        <p>{this.state.incident.attackType}</p>

                                        <small>Assets</small>
                                        <p className="font-italic">{this.state.incident.assets}</p>

                                        <small>Sectors</small>
                                        <p className="font-italic">{this.state.incident.sectors}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <small>Incident Date</small>
                                <p>{moment(this.state.incident.date).format('ll')}</p>

                                <small>Location</small>
                                <p>
                                    City: {this.state.incident.location ? this.state.incident.location.city : ''} <br />
                                    Lat: {this.state.incident.location ? this.state.incident.location.latitude : ''} <br />
                                    Lon: {this.state.incident.location ? this.state.incident.location.longitude : ''} <br />
                                </p>

                                <small>Precision</small>
                                <p className="font-italic">{this.state.incident.precision}</p>

                                <small>Impact</small>
                                <p className="font-italic">{this.state.incident.impact}</p>

                                <p className="form-check">
                                    <input className="form-check-input" type="checkbox" onClick={this.handleNearMissCheckboxClicked} checked={this.state.incident.nearMiss} id="nearMiss" />
                                    <label className="form-check-label" htmlFor="nearMiss">
                                        Near Miss
                                    </label>
                                </p>

                                <small>Keywords</small>
                                <p></p>

                                <small>Source Links</small>
                                <p></p>

                                <small>System Information</small>
                                <p>
                                    Created On: {this.state.incident.systemInformation && this.state.incident.systemInformation.createdOn ? moment(this.state.incident.systemInformation.createdOn).format('ll') : 'Unknown'} <br />
                                    Creaded By: {this.state.incident.systemInformation && this.state.incident.systemInformation.createdBy ? this.state.incident.systemInformation.createdBy : 'Unknown'} <br />
                                    Last Reviewed On: {this.state.incident.systemInformation && this.state.incident.systemInformation.lastReviewedOn ? moment(this.state.incident.systemInformation.lastReviewedOn).format('ll') : 'Unknown'} <br />
                                    Last Reviewed By: {this.state.incident.systemInformation && this.state.incident.systemInformation.lastReviewedBy ? this.state.incident.systemInformation.lastReviewedBy : 'Unknown'} <br />
                                    Last Updated On: {this.state.incident.systemInformation && this.state.incident.systemInformation.lastUpdatedOn ? moment(this.state.incident.systemInformation.lastUpdatedOn).format('ll') : 'Unknown'} <br />
                                    Last Updated By: {this.state.incident.systemInformation && this.state.incident.systemInformation.lastUpdatedBy ? this.state.incident.systemInformation.lastUpdatedBy : 'Unknown'} <br />
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
                                    <h3 className="card-text">{this.state.incident.location ? this.state.incident.location.city : ''}</h3>
                                </div>
                                <img alt="Map not created" className="card-img-bottom" src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=400x400&maptype=roadmap&key=AIzaSyBHqOsq3OIQoxKexk9zZsAxOG-gzuo5QGk" />
                            </div>

                            <table className="table table-borderless table-sm text-white">
                                <tbody>
                                    <tr>
                                        <th scope="row">ExxonMobil Properties</th>
                                        <td className="text-right">{this.state.incident.exxonMobilProperties}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ExxonMobil Head Count</th>
                                        <td className="text-right">{this.state.incident.exxonMobilHeadCount}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Threat Level</th>
                                        <td className="text-right">{this.state.incident.threatLevel}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="text-center w-100 text-white"><h6>Nearest Properties</h6></div>
                            <table className="table table-borderless table-sm text-white">
                                <tbody>
                                    {this.renderNearesProperties}
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