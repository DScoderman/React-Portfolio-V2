/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const ResumeLocation = (event) => event.onClick();

export default function Links() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        typography: 'body1',
        fontSize:'50px',
        '& > :not(style) + :not(style)': {
          ml: 50,
        },
      }}
      onClick={ResumeLocation}
    >
      <Link href="#" underline="hover" color="white"  fontSize="50px" >Resume</Link>
      
    </Box>
  );
}