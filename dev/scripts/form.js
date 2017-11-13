import React from 'react';
import Autocomplete from 'react-google-autocomplete';

const Form = (props) => {
	return(
		<form onSubmit={props.handleSubmit}>
			<Autocomplete
    			style={{width: '100%'}}
   				onPlaceSelected={(place) => {
      				console.log(place);
    			}}
				types={['(address)']}
				id="startAddy"
				name="startAddy"
				onChange={props.handleChange}
    			componentRestrictions={{country: "ru"}}
			/>
			<Autocomplete
    			style={{width: '100%'}}
   				onPlaceSelected={(place) => {
      				console.log(place);
    			}}
				types={['(address)']}
				id="endAddy"
				name="endAddy"
				onChange={props.handleChange}
    			componentRestrictions={{country: "ru"}}
			/>
			<button className="form-btn">Calculate</button>
		</form>
	)
}

export default Form;