"use client";
import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { FooterBoxLink, SocialLink, FooterBox } from "./_document";
import facebookIcon from "public/facebookIcon.svg";
import instagramIcon from "public/instagramIcon.svg";
import linkedinIcon from "public/linkedinIcon.svg";
import twitterIcon from "public/twitterIcon.svg";
import youtubeIcon from "public/youtubeIcon.svg";
import androidIcon from "public/androidIcon.svg";
import appleIcon from "public/appleIcon.svg";

function Index() {
  const SoicalIcons = [
    facebookIcon,
    linkedinIcon,
    twitterIcon,
    youtubeIcon,
    instagramIcon,
  ];

  const Links = [
    [
      { label: "About Us", link: "" },
      { label: "Feedback", link: "" },
      { label: "Community", link: "" },
    ],
    [
      { label: "Trust, Safety & Security", link: "" },
      { label: "Help & Support", link: "" },
      { label: "Upwork Foundation", link: "" },
    ],
    [
      { label: "Terms of Service", link: "" },
      { label: "Privacy Policy", link: "" },
      { label: "CA Notice at Collection", link: "" },
    ],
    [
      { label: "Accessibility", link: "" },
      { label: "Desktop App", link: "" },
      { label: "Cookie Policy", link: "" },
      { label: "Enterprise Solutions", link: "" },
    ],
  ];

  return (
    <FooterBox flexDirection={"column"} paddingY={8} paddingX={"8%"}>
      <Grid container spacing={5}>
        {Links.map((items, index) => (
          <Grid
            key={index}
            container
            justifyContent="space-evenly"
            item
            md={3}
            xl={3}
            gap={"10px"}
            flexDirection={"column"}
          >
            {items.map((link, subIndex) => (
              <FooterBoxLink key={subIndex} href={link.link}>
                {link.label}
              </FooterBoxLink>
            ))}
          </Grid>
        ))}
      </Grid>
      <Box
        gap={4}
        display={"flex"}
        flexWrap={"wrap"}
        mt={3}
        width="100%"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box flexWrap={"wrap"} display={"flex"} gap={1} alignItems={"center"}>
          <Typography
            color={"#fff"}
            variant="body1"
            children={"Follow us"}
            mr={"10px"}
          />
          <Box gap={1} display={"flex"}>
            {SoicalIcons.map((icon, subIndex) => (
              <SocialLink key={subIndex} src={icon} alt="icon" />
            ))}
          </Box>
        </Box>
        <Box flexWrap={"wrap"} display={"flex"} gap={1} alignItems={"center"}>
          <Typography
            color={"#fff"}
            variant="body1"
            children={"Mobile app"}
            mr={"10px"}
          />
          <Box gap={1} display={"flex"}>
            <SocialLink src={appleIcon} alt="icon" />
            <SocialLink src={androidIcon} alt="icon" />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ width: "100%", borderColor: "#fff", marginY: "1rem" }} />
      <Typography
        variant="body2"
        children={"© 2015 - 2023 Upwork® Global Inc."}
      />
    </FooterBox>
  );
}

export default Index;
