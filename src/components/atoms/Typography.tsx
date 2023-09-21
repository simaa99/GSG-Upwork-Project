import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

interface IndexProps {
  text: string;
  sx?: TypographyProps['sx'];
  variant?: TypographyProps['variant'];
}

export default function index({ text, sx, variant }: IndexProps) {
  return (
    <Typography variant={variant} sx={{ textAlign: "center", ...sx }} children={text} />
  );
}
