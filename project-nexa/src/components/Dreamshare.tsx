import React from 'react';
import { CardCustom } from './styled';
import {CardAreaCustom} from './styled';
import Typography from '@material-ui/core/Typography';
import {ContainerCustom} from './styled';
import { Title } from './styled';
import { Step } from './styled';
import { Grid } from '@material-ui/core';

const share = [
	{bg: require('../common/img/photo-dreamvacation.jpeg'), step: '1', title: 'Sed leo enim, condimentum', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident magni consectetur cum.'},
	{bg: require('../common/img/photo-paisagem.jpeg'), step: '2', title: 'Morbi velit risus', description: 'Nulla nisi cumque a repellendus sit amet consectetur nesciunt fugiat dolor maiores sint dignissimos.'},
	{bg: require('../common/img/photo-city.jpeg'), step: '3', title: 'Sed leo enim, condimentum', description: 'Quisque maiores sint dignissimos facere reiciendis et tempore porro delectus autem? Dolore.'}
]

const CardDream = () => {

  return (
		<ContainerCustom>
			<Title>How Dreamshare</Title>
			<Grid container spacing={2}>
			{
				share.map(function (item){
					return (
						<Grid item xs={12} sm={4}>
							<CardCustom>
								<img className='bgCard' src={item.bg}/>
								<CardAreaCustom>
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
		</ContainerCustom>
  );
}

export default CardDream;