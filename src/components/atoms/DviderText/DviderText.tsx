import React from 'react';
import { Divider } from '@mui/material';
import { DividerText } from './_document';

interface IndexProps {
  text?: string;
}

export default function Index({ text }: IndexProps) {
  return (
    <Divider sx={{ width: "100%" }}>
      <DividerText children={text || "divider"} />
    </Divider>
  );
}