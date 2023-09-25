import React from 'react';
import { Box, Grid } from '@mui/material';

interface Props {
  JobDetails: React.ReactNode;
  ClientDetails: React.ReactNode;
  SimilarJobs: React.ReactNode;
}

const Index: React.FC<Props> = ({ JobDetails, ClientDetails, SimilarJobs }) => {
  const borderStyle = {
    overflow: "hidden",
    border: "1px solid #e4ebe5",
    borderRadius: "10px",
    width: "100%",
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box sx={borderStyle}>
        <Grid container spacing={0}>
          {/* Grid of Job Details */}
          <Grid container item md={8}>
            {JobDetails}
          </Grid>

          {/* Grid of Client Details */}
          <Grid width="100%" flexDirection="column" container item md={4}>
            {ClientDetails}
          </Grid>
        </Grid>
      </Box>

      {/* Grid of Similar Jobs Rows */}
      <Box sx={borderStyle}>
        {SimilarJobs}
      </Box>
    </Box>
  );
};

export default Index;
