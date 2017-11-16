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

	return(
		<form onSubmit={props.handleSubmit}>
			<PlacesAutocomplete inputProps={inputPropsStart} name="startAdd" value={props.startAdd}/>
			<PlacesAutocomplete inputProps={inputPropsEnd} name="endAdd"/>
			<button className="form-btn" type="submit">Calculate</button>
		</form>
	)

}

export default Form;