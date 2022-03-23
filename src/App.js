import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import './App.css'




export default function MediaCard(props) {
  return (
    <>
      <Card sx={{ minWidth: 400 ,maxHeight:500}} style={{borderRadius:'15px'}}>
      
      <CardContent align='center' variant='caption text'>
        <b>FREE</b>
        <>
          <a><h1><strong>$0<span className='month'>/month</span></strong></h1></a>
        </>
          
        
        <Typography align='left' mt={3}>
          <ul>
            <li><CheckIcon />&nbsp;Single User</li>
            <li><CheckIcon />&nbsp;5 GB Storage</li>
            <li><CheckIcon />&nbsp;Unlimited Public Projects</li>
            <li><CheckIcon />&nbsp;Community Access</li>
            <li className='cross'><ClearIcon />&nbsp;Unlimited Private Projects</li>
            <li className='cross'><ClearIcon />&nbsp;Dedicated Phone Support</li>
            <li className='cross'><ClearIcon />&nbsp;Free Subdomain</li>
            <li className='cross'><ClearIcon />&nbsp;Monthly Status Reports</li>

          </ul>
        </Typography>
        <Button className='bttn' variant="contained" style={{minWidth: '350px',borderRadius:'20px',marginTop:'20px',opacity:0.7}} >BUTTON</Button>
      </CardContent>
      
      
        
      
      </Card>
      <Card sx={{ minWidth: 400 ,maxHeight:500}} style={{borderRadius:'15px'}}>
      
      <CardContent align='center' variant='caption text'>
        <b>PLUS</b>
        <>
          <a><h1><strong>$9<span className='month'>/month</span></strong></h1></a>
        </>
          
        
        <Typography align='left' mt={3}>
          <ul>
            <li><CheckIcon />&nbsp;5 Users</li>
            <li><CheckIcon />&nbsp;50GB Storage</li>
            <li><CheckIcon />&nbsp;Unlimited Public Projects</li>
            <li><CheckIcon />&nbsp;Community Access</li>
            <li><CheckIcon />&nbsp;Unlimited Private projects</li>
            <li ><CheckIcon />&nbsp;Dedicated Phone Support</li>
            <li><CheckIcon />&nbsp;Free Subdomain</li>
            <li className='cross'><ClearIcon />&nbsp;Monthly Status Reports</li>

          </ul>
        </Typography>
        <Button className='bttn' variant="contained" style={{minWidth: '350px',borderRadius:'20px',marginTop:'20px',opacity:0.7}} >BUTTON</Button>
      </CardContent>
      
      
        
      
      </Card>

      <Card sx={{ minWidth: 400 ,maxHeight:500}} style={{borderRadius:'15px'}}>
      
      <CardContent align='center' variant='caption text'>
        <b>PRO</b>
        <>
          <a><h1><strong>$49<span className='month'>/month</span></strong></h1></a>
        </>
          
        
        <Typography align='left' mt={3}>
          <ul>
            <li><CheckIcon />&nbsp;Unlimited Users</li>
            <li><CheckIcon />&nbsp;150GB Storage</li>
            <li><CheckIcon />&nbsp;Unlimited Public Projects</li>
            <li><CheckIcon />&nbsp;Community Access</li>
            <li><CheckIcon />&nbsp;Unlimited Private projects</li>
            <li ><CheckIcon />&nbsp;Dedicated Phone Support</li>
            <li><CheckIcon />&nbsp;Free Subdomain</li>
            <li><CheckIcon />&nbsp;Monthly Status Reports</li>

          </ul>
        </Typography>
        <Button className='bttn' variant="contained" style={{minWidth: '350px',borderRadius:'20px',marginTop:'20px',opacity:0.7}} >BUTTON</Button>
      </CardContent>
      
      
        
      
      </Card>

     
    </>
    
    
  );
}     