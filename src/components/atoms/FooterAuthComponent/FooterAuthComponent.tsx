import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import brackPoint from "@/styles/breackPoint.json";

export const FooterAuthComponent: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "97%",
        margin: "0 auto",
        height: "7rem",
        borderRadius: "0.5rem",
        backgroundColor: "#001e00",
        marginBottom: "1rem",
        marginTop: "2rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        ["@media " + brackPoint.sx]: {
          width: "90%",
          marginBottom: "0rem",
          borderRadius: "0.5rem 0.5rem 0 0",

        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="body1" fontSize="0.6rem">
              {` © 2015 - ${new Date().getFullYear()} Upwork® Global Inc. • Privacy Policy`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterAuthComponent;
