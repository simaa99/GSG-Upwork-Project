import React from 'react';
import { Box, Typography } from '@mui/material';
import colors from '@/styles/colors.json';
import Link from 'next/link';

interface Props {
  title: string;
  subTitle: string;
  link: string;
}

const Index: React.FC<Props> = ({ title, subTitle, link }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={10} padding={3}>
      <Box>
        <Typography variant='h5'>
          {title}
        </Typography>
        <Typography variant='body1'>
          <Link
            style={{ color: colors.mainGreenColor }}
            href="#"
          >
            {subTitle}
          </Link>
        </Typography>
      </Box>
      <Typography variant='body2'>
        <Link
          style={{ color: colors.mainGreenColor }}
          href={link}
        >
          {link}
        </Link>
      </Typography>
    </Box>
  );
};

export default Index;
