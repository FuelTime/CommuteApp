import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-google-autocomplete';
import Main from './main';
import Form from './form';
import Result from './result';
// const ReactIcons = require('react');
// const FontAwesome = require('react-fontawesome');
 
// ReactIcons.render(<FontAwesome name='rocket' />, document.body);
// ReactDOM.render(<h1></h1>, document.getElementById('app'));


// landing page with inputs
class Landing extends Component {
    render(){
        return(
            <div className="wrapper"></div>
        )
    }
}
// form comp

// result comp

// 

// results page 



class App extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
}


// .getCommuteData = function(origin, destination){
// 	var service = new google.maps.DistanceMatrixService();
//     service.getDistanceMatrix(
//     {
//         origins: [origin],
//         destinations: [destination],
//         travelMode: 'TRANSIT'
//     }, litCommute.handleCommuteData);
// }