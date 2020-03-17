import  React from 'react';
import Container from '@material-ui/core/Container';
import { Header } from './styled';
import { Navbar } from './styled';
import { Title } from './styled';
import { SubTitle } from './styled';
import Grid from '@material-ui/core/Grid';
import { Button, CardContent } from '@material-ui/core';

const Banner = () => {
	return (
		<Header>
			<div className="lightness">
				<Container>
					<Navbar>
						<Grid>DREAMSHARE</Grid>
						<Grid>
							<Button>Log in</Button>
							<Button>Sign up</Button>
						</Grid>
					</Navbar>
					<CardContent>
						<Title>share your holiday dream</Title>
						<SubTitle>And find the perfect partner to fullfill it</SubTitle>
						<Button variant="contained" color="secondary">Find your holiday partner</Button>
					</CardContent>
				</Container>
			</div>
		</Header>
	)
}

export default Banner;