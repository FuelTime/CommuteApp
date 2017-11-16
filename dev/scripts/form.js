import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const Form = (props) => {
	
	const inputPropsStart = {
		value: props.startAddvalue,
		onChange: props.handleChangeStart,
	}
	const inputPropsEnd = {
		value: props.endAddvalue,
		onChange: props.handleChangeEnd,
	}

	return(
		<form onSubmit={props.handleSubmit}>
			<PlacesAutocomplete inputProps={inputPropsStart} />
			<PlacesAutocomplete inputProps={inputPropsEnd} />
			<button className="form-btn" type="submit">Calculate</button>
		</form>
	)

}

export default Form;