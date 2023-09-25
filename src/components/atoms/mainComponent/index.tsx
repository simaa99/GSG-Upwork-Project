import React from "react";
import { Grid } from "@mui/material";
import {
  borderStyle,
  MainJobsGrid,
  MobileJobsGrid,
  ProfileGrid,
} from "./_document";

interface Props {
  mainView?: React.ReactNode;
  welcomeMessage: React.ReactNode;
  searchBar: React.ReactNode;
  profile?: React.ReactNode[];
}

const Index: React.FC<Props> = (props) => {
  return (
    <>
      <div style={{display:"flex", padding:"1rem"}}>
        <div>
          <MobileJobsGrid item>{props.mainView}</MobileJobsGrid>

          <MainJobsGrid container>
            <Grid sx={borderStyle} item>
              {props.welcomeMessage}
            </Grid>

            <Grid width={"100%"} item>
              {props.searchBar}
            </Grid>

            <Grid sx={borderStyle} item>
              {props.mainView}
            </Grid>
          </MainJobsGrid>
        </div>

        <div>
          <ProfileGrid container>
            {props.profile?.map((item, index) => (
              <Grid key={index} sx={borderStyle} item>
                {item}
              </Grid>
            ))}
          </ProfileGrid>
        </div>
      </div>
    </>
  );
};

export default Index;
