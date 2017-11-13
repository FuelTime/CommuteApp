import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const Form = (props) => {
	
	const inputProps = {
		value: props.address,
		onChange: props.handleChange,
	}
	return(
		<form>
			<PlacesAutocomplete inputProps={inputProps} />
			<PlacesAutocomplete inputProps={inputProps} />
			<button className="form-btn" type="submit">Calculate</button>
		</form>
	)
}

export default Form;