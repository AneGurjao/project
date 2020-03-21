import  React from 'react';
import {ContainerCustom} from './styled';
import { Title } from './styled';
import { ButtonFull } from './styled';
import { Text } from './styled';
import { TextFieldCustom } from './styled';
import { Grid } from '@material-ui/core';

const Vacation = () => {
	return (
		<>
			<ContainerCustom>
				<Title>Create your holiday</Title>
				<Text>Hi! What are your holiday interests?</Text>
				<Grid container justify="center">
					<TextFieldCustom
						label="Enter your interests"
						id="outlined-size-small"
						variant="outlined"
						size="small"
					/>
					<ButtonFull>Search partners</ButtonFull>
				</Grid>
			</ContainerCustom>
		</>
	)
}

export default Vacation;