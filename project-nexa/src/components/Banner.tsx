import  React from 'react';
import {ContainerCustom} from './styled';
import { Header } from './styled';
import { BannerTitle } from './styled';
import { SubTitle } from './styled';
import { ContentCard } from './styled';
import { ButtonFull } from './styled';
import { CompanyName } from './styled';

const Banner = () => {
	return (
		<Header>
			<div className="lightness">
				<ContainerCustom className="body">
					<ContentCard>
						<CompanyName className="mobile">DREAMSHARE</CompanyName>	
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