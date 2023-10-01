"use client"
import React, { Component, Fragment } from "react";
import MainComponent from "@/components/atoms/mainComponent";
import ProfileCard from "@/components/atoms/ProfileCard";
import WelcomeMessage from "@/components/atoms/WelcomeMessage";
import SearchBar from "@/components/molecules/SearchBar";
import EditableLine from "@/components/atoms/EditableLine";
import ProfileSteps from "@/components/atoms/ProfileSteps";
import ProfileSideProposal from "@/components/atoms/ProfileSideProposal";
import ProfileSideLink from "@/components/atoms/ProfileSideLink";
import colors from "@/styles/colors.json";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import JobsApiCall from "@/hooks/JobsApiCall";

interface ProfileLink {
  text: string;
  link: string;
}

export default class Index extends Component {
  profileLinks: ProfileLink[] = [
    { text: "Upwork Acadamy", link: "" },
    { text: "Directs Connects", link: "" },
    { text: "Get Paid", link: "" },
    { text: "Community & Forums", link: "" },
    { text: "Help Center", link: "" },
  ];

  profileSideContent: JSX.Element[] = [
    <>
      <ProfileCard />
      <ProfileSteps />
      <Box paddingX={5} paddingY={2}>
        <Typography
          fontSize={"15px"}
          fontWeight={"400"}
          color={colors.mainGreenColor}
        >
          135 Available Connects
        </Typography>
      </Box>
      <Divider />
      <EditableLine
        title={"Availability Badge"}
        desc={"More than 30 hrs/week"}
      />
      <EditableLine
        title={"Hours per week "}
        desc={"As Needed - Open to Offers"}
      />
      <EditableLine
        title={"Job Preference"}
        desc={"More than 30 hrs/week"}
      />
      <EditableLine
        title={"Availability Badge"}
        desc={"More than 30 hrs/week"}
      />
      <Divider />
      <br />
      <EditableLine title={"My Categories "} />
      <br />
    </>,
    <ProfileSideProposal
      title={"Proposals"}
      subTitle={"My Proposals"}
      link={"1 submitted proposal"}
    />,
    <ProfileSideProposal
      title={"Project Catalog"}
      subTitle={"My Project Dashboard"}
      link={"Create a Catalog project for clients to purchase instantly"}
    />,
    <>
      {this.profileLinks.map((link, index) => {
        return (
          <Fragment key={index}>
            <ProfileSideLink {...link} />
            {index + 1 !== this.profileLinks.length && <Divider />}
          </Fragment>
        );
      })}
    </>,
  ];

  render() {
    return (
      <>
        <MainComponent
          mainView={<JobsApiCall />}
          welcomeMessage={<WelcomeMessage />}
          searchBar={<SearchBar />}
          profile={this.profileSideContent}
        />
      </>
    );
  }
}
