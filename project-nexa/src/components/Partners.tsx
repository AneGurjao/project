import  React from 'react';
import { ContainerCustom } from './styled';
import { Title } from './styled';
import { SmallAvatar } from './styled';
import { BadgeCustom } from './styled';
import { AvatarCustom } from './styled';
import { TitleSmall } from './styled';
import { Description } from './styled';
import { ButtonEmpty } from './styled';
import Grid from '@material-ui/core/Grid';
import camIcon from '../common/img/camera.svg';
import paintIcon from '../common/img/paint-brush222.svg';
import planeIcon from '../common/img/plane.svg';
import musicalIcon from '../common/img/musical-note.svg';
import photoBoy from '../common/img/photo-boy2.jpeg';
import photoMan from '../common/img/photo-boy.jpeg';
import photoGirl from '../common/img/photo-girl2.jpeg';
import photoWoman from '../common/img/photo-girl1.jpeg';

const Partners = () => {
	return (
		<ContainerCustom>
      <Title>Meet a partners for your best</Title>
      <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={1}>
        <Grid item xs={3} style={{textAlign: 'center'}}>
          <BadgeCustom
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={<SmallAvatar className="musicalIconColor" src={musicalIcon} />}
          >
            <AvatarCustom src={photoBoy} />
          </BadgeCustom>
          <TitleSmall>Bradley Hunter</TitleSmall>
          <Description>Based in Chicago. I love playing tennis and loud music.</Description>
        </Grid>
        <Grid item xs={3} style={{textAlign: 'center'}}>
          <BadgeCustom
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={<SmallAvatar className="paintIconColor" src={paintIcon} />}
          >
            <AvatarCustom src={photoGirl} />
          </BadgeCustom>
          <TitleSmall>Marie Bennett</TitleSmall>
          <Description>Currently living in Colorado. Lover of art, languages and travelling.</Description>
        </Grid>
        <Grid item xs={3} style={{textAlign: 'center'}}>
          <BadgeCustom
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={<SmallAvatar className="camIconColor" src={camIcon} />}
          >
            <AvatarCustom src={photoWoman} />
          </BadgeCustom>
          <TitleSmall>Diana Wells</TitleSmall>
          <Description>Living in Athens, Greece. I love black and white classics, chillout music and green tea.</Description>
        </Grid>
        <Grid item xs={3} style={{textAlign: 'center'}}>
          <BadgeCustom
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={<SmallAvatar className="planeIconColor" src={planeIcon} />}
          >
            <AvatarCustom src={photoMan} />
          </BadgeCustom>
          <TitleSmall>Christopher Pierce</TitleSmall>
          <Description>Star Wars fanatic. I have a persistent enthusiasm to create new things.</Description>
        </Grid>
        <ButtonEmpty>See other partners</ButtonEmpty>
      </Grid>
		</ContainerCustom>
	)
}

export default Partners;
