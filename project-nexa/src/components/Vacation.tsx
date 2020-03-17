import  React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';

const Vacation = () => {
	return (
		<div>
			<h1>Create your holiday</h1>
			<FormControl variant="filled">
				<InputLabel htmlFor="component-filled">Name</InputLabel>
				<FilledInput id="component-filled" />
			</FormControl>
			<Button variant="contained" color="secondary">Search partners</Button>
		</div>
	)
}

export default Vacation;