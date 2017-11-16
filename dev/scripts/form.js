import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const Form = (props) => {
	
	const inputPropsStart = {
		value: props.startAdd,
		onChange: props.handleChangeStart,
	}
	const inputPropsEnd = {
		value: props.endAdd,
		onChange: props.handleChangeEnd,
	}

	// litCommute.getCommuteData = function(origin, destination){
	// 	var service = new google.maps.DistanceMatrixService();
	// 	service.getDistanceMatrix(
	// 	{
	// 		origins: [origin],
	// 		destinations: [destination],
	// 		travelMode: 'TRANSIT'
	// 	}, litCommute.handleCommuteData);
	// }
	

	return(
		<form>
			<PlacesAutocomplete inputProps={inputPropsStart} />
			<PlacesAutocomplete inputProps={inputPropsEnd} />
			<button className="form-btn" type="submit">Calculate</button>
		</form>
	)
}

export default Form;