import  React from 'react';
import {ContainerCustom} from './styled';
import { Foot } from './styled';
import { TitleSmall } from './styled';
import { TypographyCustom } from './styled';
import { Grid } from '@material-ui/core';
import ImgFooter from '../common/img/img-footer.png';

const Footer = () => {
	return (
		<Foot>
			<ContainerCustom>
				<Grid container direction="row" justify="space-evenly">
					<Grid item xs={12} sm={3} md={2}>
						<TypographyCustom>DREAMSHARE</TypographyCustom>
					</Grid>
					<Grid item xs={12} sm={3} md={1}>
						<TitleSmall>Company</TitleSmall>
						<ul>
							<li>About</li>
							<li>Contact</li>
							<li>Press</li>
						</ul>  
					</Grid >
					<Grid item xs={12} sm={3} md={3}>
						<ul>
							<li>Blog</li>
							<li>Terms and Privacy</li>
							<li>Help</li>
						</ul>
					</Grid>
					<Grid item xs={12} sm={3} md={1}>
						<img src={ImgFooter} />
					</Grid>
				</Grid>
			</ContainerCustom>
		</Foot>
	)
}

export default Footer;