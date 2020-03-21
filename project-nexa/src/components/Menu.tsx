import  React from 'react';
import { Navbar } from './styled';
import { CompanyName } from './styled';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';

const Menu = () => {
  return (
    <Grid container>
      <Navbar>
        <CompanyName className="desktop">DREAMSHARE</CompanyName>
        <div>
            <Link href="#" className="link">Log in</Link>
            <Link href="#" className="link active">Sign up</Link>
        </div>
      </Navbar>
    </Grid>
  )
}

export default Menu;