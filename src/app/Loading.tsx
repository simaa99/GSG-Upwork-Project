import { Backdrop, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

interface IndexProps {
  open: boolean;
  handleClose: () => void;
  color?: "primary" | "secondary" | "inherit" | undefined;
}

const Index: FC<IndexProps> = ({ open, handleClose, color }) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color={color || "inherit"} />
    </Backdrop>
  );
};

export default Index;
