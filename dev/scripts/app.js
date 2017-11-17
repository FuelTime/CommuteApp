import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form'
import Landing from './landing';

// const ReactIcons = require('react'); 
// const FontAwesome = require('react-fontawesome');
 
// ReactIcons.render(<FontAwesome name='rocket' />, document.body);
// ReactDOM.render(<h1></h1>, document.getElementById('app'));


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            startAdd: "",
            endAdd: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error))
    }
    handleChange(e){
        let input = e.target;
        let options = {
            types: ['address']
        }
        let autocomplete = new google.maps.places.Autocomplete(input, options);
        console.log(e.target.value, autocomplete);
        this.setState({ 
            [e.target.name]: e.target.value,
        });
    }

    getDrivingData(origin, destination){
		var service = new google.maps.DirectionsService();
		var getRoute = {
			origins: [startAdd],
			destinations: [endAdd],
			travelMode: 'DRIVING'
        }
        service.route(getRoute, handleCommuteData);
    }
    
    getTransitData(origin, destination){
		var service = new google.maps.DirectionsService();
		var getRoute = {
			origins: [startAdd],
			destinations: [endAdd],
			travelMode: 'TRANSIT'
        }
        service.route(getRoute, handleCommuteData);
	}
    
    handleCommuteData(response, status) {
        if (status == "OK") {
          var warnings = document.getElementById("warnings_panel");
          warnings.innerHTML = "" + response.routes[0].warnings + "";
          directionsDisplay.setDirections(response);
          showSteps(response);
        }
    };
    
    componentDidMount() {
        const elem = document.getElementById('autocomplete')
        this.autocomplete = new window.google.maps.places.Autocomplete(elem, { types: ['geocode'] })    
    }

    render(){
      return(
        <div>
            <Landing  
                handleSubmit={this.handleSubmit} 
                startAdd={this.state.startAdd}
                endAdd={this.state.endAdd}
                handleChange={this.handleChange}
            />
        </div>
      );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));