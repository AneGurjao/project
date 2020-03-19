import  React from 'react';
import {ContainerCustom} from './styled';
import { Header } from './styled';
import { Navbar } from './styled';
import { BannerTitle } from './styled';
import { SubTitle } from './styled';
import { ContentCard } from './styled';
import { ButtonFull } from './styled';
import { CompanyName } from './styled';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';

const Banner = () => {
	return (
		<Header>
			<div className="lightness">
				<ContainerCustom>
					<Navbar>
						<CompanyName>DREAMSHARE</CompanyName>
						<Grid>
							<Link href="#" className="link">Log in</Link>
							<Link href="#" className="link">Sign up</Link>
						</Grid>
					</Navbar>
					<ContentCard>
						<BannerTitle>share your holiday dream</BannerTitle>
						<SubTitle>And find the perfect partner to fullfill it</SubTitle>
						<ButtonFull>Find your holiday partner</ButtonFull>
					</ContentCard>
				</ContainerCustom>
			</div>
		</Header>
	)
}

export default Banner;