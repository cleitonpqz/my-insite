import React from 'react'
import Reflux from 'reflux';
import IncidentStore from '../stores/incident-store';
import IncidentActions from '../actions';

import Incident from './incident';

class IncidentList extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.store = IncidentStore;
    }

    componentDidMount() {
        IncidentActions.getIncidents();
    }

    loadItem(id) {
        IncidentActions.getIncident(id);
    }

    render() {
        var list = this.state.incidentList.map(function(incidentProps){
            return <Incident whenItemClicked={this.loadItem} key={incidentProps.id} {...incidentProps} />
        }.bind(this));

        return(
            <div className="col-5" id="incident-list-container" >
                <div className="row text-white pl-3 pt-1" >
                    <nav className="navbar navbar-expand-lg navbar-light flex-column flex-md-row bd-navbar w-100">
                        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex text-white">
                            <li className="nav-item">
                                <span className="navbar-brand text-white">137</span>
                            </li>
                        </ul>
                        
                        <div className="collapse navbar-collapse flex-row ml-md-auto d-none d-md-flex" id="navbarSupportedContent">
                            <form className="form-inline my-2 my-lg-0 w-100">
                                <input className="form-control rounded-0 w-100" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>

                        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex text-white">
                            <li className="nav-item border-right">
                                <a href="" className="text-white"><i className="fas fa-search fa-2x mx-2"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="text-white"><i className="fas fa-filter fa-2x mx-2"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="row bg-white" id="incident-list" >
                    {list}
                </div>
            </div>
        );
    }
}

export default IncidentList;