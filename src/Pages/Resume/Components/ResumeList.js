import React from "react";
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';





const ResumeList = () => {
    return(
        <Container>
    
<h2> Front End Skills </h2>
<ul> 
    <li> HTML</li>
    <li> CSS</li>
    <li> Javascript</li>
    <li> Bootstrap</li>
    <li> API Integration</li>
</ul>
<h2> Back End Skills</h2>
<ul> 
<li> SQL</li>
<li> React.JS</li>
<li> MongoDB</li>
<li> ORM</li>
<li> Express.JS</li>
</ul>
</Container>
    );
}

export default ResumeList;
