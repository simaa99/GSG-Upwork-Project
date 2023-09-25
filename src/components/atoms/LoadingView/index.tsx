import React from 'react';
import { Box } from '@mui/material';
import loading from 'public/loading-circle.gif';
import Image from 'next/image';

const Index: React.FC = () => {
  return (
    <Box height={'500px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Image width={34} height={34} alt="" src={loading} />
    </Box>
  );
};

export default Index;
