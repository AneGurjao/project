import styled from "styled-components";
import banner from '../common/img/migos.jpg';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { FormControl, Avatar, Badge, Typography } from "@material-ui/core";

export const Header = styled.header`
	background-image: url(${banner});
	background-position: center;
	background-size: cover;
	height: 100vh;

	& .lightness {
		background-color: rgba(102, 102, 102, 0.58);
		height: 100vh;
	}
`;

export const ContainerCustom = styled(Container)`
	&& {
		padding: 3.1rem 5.5rem;
	}
`;

export const Navbar = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	/* padding: 30px 0; */

	& .link {
		color: white;
		font-weight: 100;
		padding-left: 13px;
		
		&:hover {
			text-decoration: none;
			border: 1px solid #fff;
			border-radius: 15px;
			padding: 7px 13px;
		}
	}
`;

export const CompanyName = styled.div`
	color: white;
	font-weight: 600;
	letter-spacing: 0.5px;
`;

export const ContentCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 11em;
`;

export const BannerTitle = styled.h1`
	color: white;
	text-transform: uppercase;
	font-size: 3.5em;
	text-align: center;
	font-weight: 600;
`;

export const SubTitle = styled(BannerTitle)`
	text-transform: initial;
	font-size: 14px;
	font-weight: inherit;
`;

export const ButtonFull = styled(Button)`
&& {
	background: #FF4E50;
	border-radius: 20px;
	padding: 10px 22px;
	color: white;
	text-transform: initial;

	&:hover {
	background: #FF4E50;
	}
}
`;

export const ButtonEmpty = styled(ButtonFull)`
	&& {
		background: transparent;
		border: 2px solid #FF4E50;
		color: #FF4E50;
		border-radius: 28px;
		margin-top: 30px;
		font-weight: 600;

		&:hover {
			background: transparent;
		}
	}
`;

export const Title = styled.h1`
	text-align: center;
	color: #444444;
	font-size: 22px;
	padding-bottom: 30px;
	margin: 0;
`;

export const Text = styled.p`
	color: #444444;
	text-align: center;
`;

export const FormControlCustom = styled(FormControl)`
	&& {
		vertical-align: middle; 
		margin-right: 12px;
	}

	& .MuiInputLabel-formControl {
		top: -2px;
	}

	& .MuiOutlinedInput-root {
		padding-top: 3.5px;
		width: 220px;
	}

	& .MuiFilledInput-root {
		background: none;
    border: 1px solid #D8D8D8;
		border-radius: 6px;

		&:hover {background: none;}

		& .Mui-focused {
			background-color: none;
		}	

		&:before {
			content:'';
			left: auto;
		}
	}

	.MuiFilledInput-input {
    padding: 22px 60px 10px;
	}	
`;

export const BadgeCustom = styled(Badge)`
	color: #44b700;
	box-shadow: 0 0 0 2px #fff;
	margin-bottom: 20px;

	& .musicalIconColor {
		background-color: #FF4E50;
	}

	& .paintIconColor {
		background-color: #19D4CA;
	}

	& .camIconColor {
		background-color: #FFA710;
	}

	& .planeIconColor {
		background-color: #667DF3;
	}
`;

export const AvatarCustom = styled(Avatar)`
	&& {
		width: 120px;
		height: 120px;
	}
`;

export const SmallAvatar = styled(Avatar)`
&& {
	border: 4px solid #fff;

	& img {
		width: 18px;
		height: 18px;
	}
}
`;

export const TitleSmall = styled.h4`
	color: #444444;
	text-align: center;
	margin-top: 0;
`;

export const Description = styled(Typography)`
	&& {
		color: #999999;
		text-align: center;
		font-weight: 100;
	}
`;

export const Foot = styled.div`
	border-top: 2px solid #FF4E50;

	& ul {
		list-style: none;
		padding-left: 7px;

		&:nth-child(1) {
			margin-top: 42px;
		}

		& li {
			color: #999999;
			padding-bottom: 10px;
		}
	}
`;

export const TypographyCustom = styled(BannerTitle)`
	color: #FF4E50;
	font-size: 1em;
	font-weight: 300;
	margin-top: 0;
`;