import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const Form = (props) => {
	return(
		<form onSubmit={props.handleSubmit}>
			<input type="text" onChange={props.handleChange} name="startAdd" value={props.startAdd}/>
			<input type="text" onChange={props.handleChange} name="endAdd" value={props.endAdd}/>
			<button className="form-btn" type="submit">Calculate</button>
		</form>
	)
}

export default Form;