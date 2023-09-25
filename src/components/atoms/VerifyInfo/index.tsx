import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import VerifiedIcon from '@mui/icons-material/Verified';

interface Props {
  label?: string;
}

const Index: React.FC<Props> = ({ label }) => {
  return (
    <Box display="flex" gap="4px">
      <VerifiedIcon sx={{ width: "15px", height: "15px" }} color="info" />
      <Typography sx={{ fontWeight: 420, fontSize: "12px" }}>
        {label || "Payment method verified"}
      </Typography>
    </Box>
  );
};

export default Index;
