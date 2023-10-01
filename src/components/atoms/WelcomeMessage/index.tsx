import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Greeting: React.FC = () => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const today = new Date();
  

  const order =
    today.getDate() === 1 ? "st" :
    today.getDate() === 2 ? "nd" :
    today.getDate() === 3 ? "rd" : "th";

  const formattedDate = today.toLocaleDateString("en-US", options) + order;

  return (
    <Box paddingX={5} paddingY={2}>
      <Typography sx={{ fontSize: "25px", fontWeight: 500 }}>{formattedDate}</Typography>
      <Typography sx={{ fontSize: "35px", fontWeight: 600, fontFamily: "unset" }}>
        Hi, Simaa A.
      </Typography>
    </Box>
  );
};

export default memo(Greeting);
