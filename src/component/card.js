import React, { useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import NetworkCellOutlinedIcon from '@mui/icons-material/NetworkCellOutlined';
import '../App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactLoading from "react-loading";
import Button from '@mui/material/Button';
import {
  Link
} from "react-router-dom";
// import Button from '@mui/material/Button';
const Card1 = (props) => {
    // const [seconds, setSeconds] = React.useState(4);
    const [isLoading, setIsLoading] = useState(false);
   
    // React.useEffect(() => {
    //   if (seconds > 0){
    //     // const timeoutDuration = window._DATADOG_SYNTHETICS_BROWSER ? 10000 : 2000;
    
    //     setIsLoading(true);
    //     setTimeout(()=>{
    //         setIsLoading(false);
    //         setSeconds(seconds - 1)}, 1000);
    //   } else {
    //     setSeconds( );
    //   }
    // },[seconds]);
    const loader = () => {
        return (
          <ReactLoading
            type={"spokes"}
            color={"#5433ff"}
            height={"4%"}
            width={"4%"}
          />
        );
      };
     
    return (
        <>
        {isLoading && (
          <div id="loaderSection" className="display-section-component">
            {loader()}
          </div>
        )}
      {!isLoading &&  <Card sx={{ maxWidth: 320 }} style={{ position: 'relative', transition:'0.4s ease-out',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',backgroundColor:'white'}} className='card' >
            <CardMedia
                component="img"
                height="230"
                image={props.image}
                alt="green iguana"
            />
           <div style={{position:'relative'}}>
           <div className='qustion'>10 Questions</div>
            <div className='ratings'>Plays: 522</div>
           </div>
            <CardContent>
                <div className='card-content'>
                {/* <Typography gutterBottom variant="h6" component="div" className='card-heading'> */}
                   <h2 className='card-heading'> {props.heading}</h2>
                {/* </Typography> */} 
                <Stack direction="row" spacing={1}>
                    <Chip label={props.chip} className='card-chip' />
                    {/* <Chip label="HTML" className='card-chip' /> */}
                </Stack>
                <div className='card-p'>
                    <p style={{ margin: '0px', marginTop: '18px' }}><SchoolOutlinedIcon /> <span style={{ position: 'absolute', marginTop: '1px', marginLeft: '12px' }}>Class: {props.class}</span></p>
                    <p style={{ margin: '0px' }}><NetworkCellOutlinedIcon /> <span style={{ position: 'absolute', marginTop: '1px', marginLeft: '12px' }}>Beginner </span></p>
                   <div style={{textAlign:'center'}}>
                   <Button   style={{marginTop:'8px',border:'2px solid red'}}><Link to={`${props.link}`}  style={{color:'red',fontWeight:'bold',textDecoration:'none'}}>Play Now</Link></Button>
                   </div>
                  
                </div>

</div>
            </CardContent>
        </Card>
} 
        </>
    );
}

export default Card1;