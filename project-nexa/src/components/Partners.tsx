import  React from 'react';
import {ContainerCustom} from './styled';
import { Title } from './styled';
import { SmallAvatar } from './styled';
import { BadgeCustom } from './styled';
import { AvatarCustom } from './styled';
import { TitleSmall } from './styled';
import { Description } from './styled';
import { ButtonEmpty } from './styled';
import Grid from '@material-ui/core/Grid';

const partners = [
	{img: require('../common/img/photo-boy2.jpeg'), class: 'musicalIconColor',  avatar: require('../common/img/musical-note.svg'), name: 'Bradley Hunter', description: 'Based in Chicago. I love playing tennis and loud music.'},
	{img: require('../common/img/photo-girl2.jpeg'), class: 'paintIconColor', avatar: require('../common/img/paint-brush222.svg'), name: 'Marie Bennett', description: 'Currently living in Colorado. Lover of art, languages and travelling.'},
  {img: require('../common/img/photo-girl1.jpeg'), class: 'camIconColor', avatar: require('../common/img/camera.svg'), name: 'Diana Wells', description: 'Living in Athens, Greece. I love black and white classics, chillout music and green tea.'},
  {img: require('../common/img/photo-boy.jpeg'), class: 'planeIconColor', avatar: require('../common/img/plane.svg'), name: 'Christopher Pierce', description: 'Star Wars fanatic. I have a persistent enthusiasm to create new things.'}
]

const Partners = () => {
	return (
		<ContainerCustom>
      <Title>Meet a partners for your best</Title>
      <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={1}>
        {
          partners.map(function (item) {
            return (
              <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
                <BadgeCustom
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  badgeContent={<SmallAvatar className={item.class} src={item.avatar} />}
                >
                  <AvatarCustom src={item.img} />
                </BadgeCustom>
                <TitleSmall>{item.name}</TitleSmall>
                <Description>{item.description}</Description>
              </Grid>
            );
          })
        }
        <ButtonEmpty>See other partners</ButtonEmpty>
      </Grid>
		</ContainerCustom>
	)
}

export default Partners;
