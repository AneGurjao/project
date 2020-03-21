import styled from "styled-components";
import banner from '../common/img/migos.jpg';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { FormControl, Avatar, Badge, Typography, Card, TextField } from "@material-ui/core";

export const ContainerCustom = styled(Container)`
	&& {
		padding: 4.1rem 5.5rem;

		&.body {
			display: table;
			width: 100%;
			height: 100%;
		}
		@media (min-width: 320px) and (max-width: 768px) {
			padding: 3.1rem 0.5rem;
		}

		@media (max-width: 425px) {
			& .desktop {
				display: none;
			}

			& .mobile {
				display: block;
			}
		}

		@media (min-width: 767px) {

			& .mobile {
				display: none;
			}
		}
	}
`;

export const Header = styled.header`
	background-image: url(${banner});
	background-position: center;
	background-size: cover;
	height: 100vh;
	position: relative;

	& .lightness {
		background-color: rgba(102, 102, 102, 0.58);
		height: 100vh;
	}
`;

export const Navbar = styled.nav`
	position: absolute;
    z-index: 999;
	display: flex;
    height: 100px;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

	& .link {
		color: white;
		font-weight: 100;
		padding-left: 13px;
		text-decoration: none;
		
		&.active {
			text-decoration: none;
			border: 2px solid #fff;
			border-radius: 18px;
			padding: 8px 15px;
			margin-left: 20px;
		}
	}
`;

export const ContentCard = styled.div`
	display: table-cell;
	vertical-align: middle;
	text-align: center;
`;

export const CompanyName = styled.div`
	color: white;
	font-weight: 600;
	letter-spacing: 0.5px;

	@media(max-width: 425px) {
		&.mobile {
			display: block;
			margin-bottom: 30px;
		}

		&.desktop {
			display: none;
		}
	}
`;


export const BannerTitle = styled.h1`
	color: white;
	text-transform: uppercase;
	font-size: 3.5em;
	text-align: center;
	font-weight: 600;
	width: 50%;
    margin: 0 auto;

	@media (max-width: 768px) {
		font-size: 2.2em;
		width: 80%;
	}
`;

export const SubTitle = styled.p`
	&& {
		text-transform: initial;
		font-size: 1.5rem;
		font-weight: 100;
		color: white;
		margin: 25px 0;
		font-family: 'Open Sans Condensed', sans-serif;
    	letter-spacing: 0.8px;

		@media (max-width: 425px) {
			font-size: 1rem;
		}

	}
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

	@media(max-width: 767px) {
		margin-top: 20px;
	}
}
`;

export const CardCustom = styled(Card)`
	&& {
		position: relative;
		height: 500px;
	}
	& .bgCard {
		width: 100%;
    	height: 500px;
		position: relative;
	}
`;

export const CardAreaCustom = styled.div`
	&& {
		position: absolute;
    	bottom: 0;
		color: white;
    	padding: 22px;
	}

	& .title-item {
		font-size: 28px;
		letter-spacing: -0.2px;
		font-family: Montserrat;
		font-weight: 600;
	}

	& .description-item {
		font-weight: 100;
    	font-size: 14px;
		font-family: Montserrat;
	}
`;

export const Step = styled.div`
	background: #FF4E50;
	text-transform: uppercase;
	letter-spacing: 1.8px;
    width: 60px;
    padding: 5px 15px;
    border-radius: 18px;
    font-size: 12px;
    text-align: center;
    font-weight: 100;
	margin-bottom: 16px;
`;

export const ButtonEmpty = styled(ButtonFull)`
	&& {
		background: transparent;
		border: 2px solid #FF4E50;
		color: #FF4E50;
		border-radius: 28px;
		margin-top: 4.5em;
		font-weight: 600;

		@media (max-width: 768px) {
			margin-top: 1em;
		}

		@media (max-width: 425px) {width: 100%;}

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
	margin-bottom: 25px;
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
		height: 40px;

		@media (max-width: 768px) {
			width: 70%;
    		margin: 0 auto 4em;
			height: 20px;
		}
	}
`;

export const TextFieldCustom = styled(TextField)`
	& .MuiOutlinedInput-root {
		margin-right: 20px;
	}

	& .MuiOutlinedInput-input {
		width: 250px;
    	padding: 0 20px;
		height: 44px;
	}
`;

export const Foot = styled.div`
	border-top: 2px solid #FF4E50;

	@media (max-width: 425px) {text-align: center;}

	& ul {
		list-style: none;
		padding-left: 7px;

		@media (max-width: 425px) {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			margin-bottom: 0;
			margin-top: 0;
		}

		&:nth-child(1) {
			margin-top: 42px;
		}

		& li {
			color: #999999;
			padding-bottom: 10px;
		}
	}
`;

export const TypographyCustom = styled.div`
	font-weight: 600;
	letter-spacing: 0.5px;	
	color: #FF4E50;
	font-size: 1em;
	font-weight: 300;
	margin-top: 0;

	@media (max-width: 767px) {
		margin-bottom: 20px;
	}
`;
