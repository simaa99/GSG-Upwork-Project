import React, { useState } from 'react';
import { Box, Input, Snackbar, Typography } from '@mui/material';
import colors from '@/styles/colors.json';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

interface Props {
  Link: string;
}

const Index: React.FC<Props> = ({ Link }) => {
  const [open, setOpen] = useState(false);

  const Copy = () => {
    setOpen(true);
    navigator.clipboard.writeText(Link);
  };

  const Close = () => setOpen(false);

  return (
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={Close}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Box display="flex" alignItems="center" gap={2} padding="10px" borderRadius={2} width="250px" bgcolor="#001f00">
          <LightbulbIcon color="info" /> <Typography color="#fff" fontSize="" children="Link Copied" />
        </Box>
      </Snackbar>
      <Input
        disableUnderline
        sx={{ fontSize: "15px", paddingX: "5px", background: "#e4ebe4", width: "220px", height: "35px", borderRadius: 2, marginBottom: "5px" }}
        disabled
        value={Link}
      />
      <Typography
        width="fit-content"
        onClick={Copy}
        sx={{ ":hover": { textDecoration: "underline", cursor: "pointer" } }}
        children="Copy link"
        fontSize=""
        color={colors.mainGreenColor}
      />
    </Box>
  );
};

export default Index;
