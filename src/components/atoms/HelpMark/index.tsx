import React from 'react';
import { Tooltip } from '@mui/material';
import Ques from 'public/help.svg';
import Image from 'next/image';

const Index: React.FC = () => {
  return (
    <Tooltip title="HELP">
      <Image alt="" src={Ques} style={{ width: "15px", height: "15px" }} />
    </Tooltip>
  );
};

export default Index;
