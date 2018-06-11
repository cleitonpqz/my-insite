import Reflux from 'reflux';
import IncidentActions from '../actions';
import _ from 'lodash';

import incidents from '../components/data/incidents.json';


class IncidentStore extends Reflux.Store {
    constructor() {
        super();
        this.state = { incidentList: [], incident: {}};
        this.listenables = IncidentActions;
    }

    getIncidents() {
        this.setState({ incidentList: incidents.data });
    }

    getIncident(id) {
        var incident = _.find(this.state.incidentList, o => { return o.id === id });
        this.setState({incident: incident});
    }
}

export default IncidentStore;