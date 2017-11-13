import React from 'react';
import ReactDOM from 'react-dom';
// import Autocomplete from 'react-google-autocomplete';
import Landing from './landing';

// const ReactIcons = require('react'); 
// const FontAwesome = require('react-fontawesome');
 
// ReactIcons.render(<FontAwesome name='rocket' />, document.body);
// ReactDOM.render(<h1></h1>, document.getElementById('app'));


class App extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
      return(
        <div>
          <Landing />
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