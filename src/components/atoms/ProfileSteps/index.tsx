import React from 'react';
import { Divider, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar';
import { ProfileViewBox, ProfileViewTitle } from './_document';
import { Box } from '@mui/system';
import Link from 'next/link';

const Index: React.FC = () => {
  return (
    <ProfileViewBox>
      <Box paddingX={5} paddingY={2}>
        <ProfileViewTitle>
          <Link style={{ color: "#000", textDecoration: "none" , fontSize:"14px"}} href="#">
            Profile Completeness
          </Link>
        </ProfileViewTitle>
        <ProgressBar />
      </Box>
      <Divider />

    </ProfileViewBox>
  );
};

export default Index;
