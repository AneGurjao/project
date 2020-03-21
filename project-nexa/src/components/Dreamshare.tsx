import  React from 'react';
import { CardCustom } from './styled';
import {CardAreaCustom} from './styled';
import Typography from '@material-ui/core/Typography';
import {ContainerCustom} from './styled';
import { Title } from './styled';
import { Step } from './styled';
import { Grid } from '@material-ui/core';
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const share = [
	{bg: require('../common/img/photo-dreamvacation.jpeg'), step: '1', title: 'Sed leo enim, condimentum', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident magni consectetur cum.'},
	{bg: require('../common/img/photo-paisagem.jpeg'), step: '2', title: 'Morbi velit risus', description: 'Nulla nisi cumque a repellendus sit amet consectetur nesciunt fugiat dolor maiores sint dignissimos.'},
	{bg: require('../common/img/photo-city.jpeg'), step: '3', title: 'Sed leo enim, condimentum', description: 'Quisque maiores sint dignissimos facere reiciendis et tempore porro delectus autem? Dolore.'}
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bullets: {
      maxWidth: 400,
      flexGrow: 1,
    },
    img: {
      height: 255,
      maxWidth: 400,
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
  }),
);

const CardDream = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
  
	const handleNext = () => {
	  setActiveStep(prevActiveStep => prevActiveStep + 1);
	};
  
	const handleBack = () => {
	  setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

  return (
		<ContainerCustom>
			<Title>How Dreamshare</Title>
			<Grid container spacing={2} className="desktop">
				{
					share.map(function (item){
						return (
							<Grid item sm={4} lg={4}>
								<CardCustom>
									<img className='bgCard' src={item.bg} alt='imagem que remetem sonhos'/>
									<CardAreaCustom className="desktop">
										<Step>Step {item.step}</Step>
										<Typography className="title-item" gutterBottom variant="h5">
											{item.title}
										</Typography>
										<Typography className="description-item" variant="body2" component="p">
											{item.description}
										</Typography>
									</CardAreaCustom>
								</CardCustom>
							</Grid>
						);
					})
				}
			</Grid>

			<Grid container className="mobile">
				<Grid item xs={12} sm={4}>
					<CardCustom>
						<img className='bgCard' src={share[activeStep].bg} alt='imagem que remetem sonhos'/>
						<CardAreaCustom>
							<Step>Step {share[activeStep].step}</Step>
							<Typography className="title-item" gutterBottom variant="h5">
								{share[activeStep].title}
							</Typography>
							<Typography className="description-item" variant="body2" component="p">
								{share[activeStep].description}
							</Typography>
						</CardAreaCustom>
					</CardCustom>
				</Grid>

				<MobileStepper
					variant="dots"
					steps={share.length}
					position="static"
					activeStep={activeStep}
					className={classes.bullets}
						nextButton={
						<Button size="small" onClick={handleNext} disabled={activeStep === share.length - 1}>
							Next
							{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
						</Button>
						}
						backButton={
						<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
							{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
							Back
						</Button>
						}
					/>

			</Grid>
		</ContainerCustom>
  );
}

export default CardDream;