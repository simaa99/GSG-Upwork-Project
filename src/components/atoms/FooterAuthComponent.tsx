import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const FooterAuthComponent: FC = (): ReactElement => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "97%",
          margin: "0 auto",
          height: "10rem",
          borderRadius: "0.5rem",
          backgroundColor: "#001e00",
          marginBottom: "1rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Typography color="white" variant="subtitle2">
                {` © 2015 - ${new Date().getFullYear()} Upwork® Global Inc. • Privacy Policy`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default FooterAuthComponent;
