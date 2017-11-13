import React from 'react';
import ReactDOM from 'react-dom';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import Form from './form'
// const ReactIcons = require('react');
// import Autocomplete from 'react-google-autocomplete';
import Landing from './landing';

// const ReactIcons = require('react'); 
// const FontAwesome = require('react-fontawesome');
 
// ReactIcons.render(<FontAwesome name='rocket' />, document.body);
// ReactDOM.render(<h1></h1>, document.getElementById('app'));


// form comp

// result comp

// 

// results page 



class App extends React.Component {
    constructor(){
        super()
        this.state = {
            address: ""
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
    handleChange(address){
        this.setState({ 
            address 
        });
    }
    componentDidMount() {
        const elem = document.getElementById('autocomplete')
        this.autocomplete = new window.google.maps.places.Autocomplete(elem, { types: ['geocode'] })    
    }

    render(){
      return(
        <div>
            <Landing  
                handleSubmit={this.handleSubmit} 
                address={this.state.address}
                handleChange={this.handleChange}
            />
        </div>
      );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

// .getCommuteData = function(origin, destination){
// 	var service = new google.maps.DistanceMatrixService();
//     service.getDistanceMatrix(
//     {
//         origins: [origin],
//         destinations: [destination],
//         travelMode: 'TRANSIT'
//     }, litCommute.handleCommuteData);
// }