import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';

import colors from '@/styles/colors.json';
import NextLink from 'next/link';

const Index: React.FC = () => {
  return (
    <Typography fontSize="14px">
      <NextLink href="/your-link-path">
        <MuiLink style={{ color: colors.mainGreenColor, fontWeight: 500 }}>
          HTML5 and JavaScript EXPERT LEVEL
        </MuiLink>
      </NextLink>
      {" Create a single HTML + JavaScript file that uses HTML CANVAS to display a waving flag. ALL needed libraries"}
    </Typography>
  );
};

export default Index;
