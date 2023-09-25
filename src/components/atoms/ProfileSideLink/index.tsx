import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

interface Props {
  text: string;
  link: string;
}

const Index: React.FC<Props> = ({ text, link }) => {

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      paddingX={3}
      paddingY={2}
      style={{ cursor: 'pointer' }}
    >
      <Typography fontSize={"17px"} fontWeight={"400"} children={text} />
      <ArrowForward />
    </Box>
  );
};

export default Index;
