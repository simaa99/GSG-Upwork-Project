import React from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@/components/molecules/Avatar';
import Link from 'next/link';

const Index: React.FC = () => {
  return (
    <Box padding={3} display={"flex"} alignItems="center" flexDirection={"column"}>
      <Avatar imgSize={"65px"} />
      <Typography variant='h6' mt={"20px"}>
        <Link
          href="/profile"
        >
          Simaa A.
        </Link>
      </Typography>
      <Typography variant='body1'>Front End Develober</Typography>
    </Box>
  );
};

export default Index;
