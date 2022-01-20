import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import cardImage1 from '../src/images/computerfundamental.jpg';
import scratch from '../src/images/scratch.jpg';
import html from '../src/images/HTML.jpg';
import javascript from '../src/images/javascript.jpg';
import python from '../src/images/python.jpg';
import applab from '../src/images/appLAB.jpg';
import Card from './component/card';
// import Card2 from './component/card';
// import Card3 from './component/card';
// import Card4 from './component/card';
// import Card5 from './component/card';
// import Card6 from './component/card';
// import {Link} from 'react-router-dom'
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));



const MainContainer = ()=>{
    return(
        <>
<div style={{maxWidth: '1100px', margin:'68px auto'}}>
<Grid container spacing={5}  rowSpacing={{ xs: 5, sm: 2, md: 3 }}>
        <Grid item md={4} xs={12}>
        <Card heading="Computer Fundamental" className='1 - 8' link='/computerfundamental' image={cardImage1} chip='Basics of computer'/>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
        <Card heading="Block Base of Coding" className='3 - 8' link='/scratch' image={scratch} chip='scratch'/>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
        <Card heading="Web Designing" className='6 - 12' link='/html' image={html} chip='HTML'/>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
        <Card heading="Javascript-fundamental" className='6 - 12' link='/javascript' image={javascript} chip='javascript'/>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
        <Card heading="Python programming fundamental" className='' link='/python' image={python} chip='python'/>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
        
        <Card heading="App Lab basics" className='6 - 12' link='/applab' image={applab} chip='App Lab'/>
        </Grid>
    
      </Grid>
</div>
        </>
    )
}
export default MainContainer;