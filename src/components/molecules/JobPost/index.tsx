import React, { useState } from "react";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  Box,
  Typography,
  Stack,
  Link,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import colors from "@/styles/colors.json";
import breackPoint from "@/styles/breackPoint.json";
import JobDetails from "@/components/pages/JobDetailsPage";
import SkillTag from "@/components/atoms/SkillTag";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandIcon from "@mui/icons-material/Expand";
import {
  IconContainer,
  iconStyle,
  JobDesc,
  JobPayingInfo,
  JobPostContainer,
  JobProposalsInfo,
  JobTitle,
  JobTitleContainer,
} from "./_document";

interface Props {
  id: string;
  task: {
    title: string;
    pay: {
      paymentType: string;
      price: number;
    };
  };
  freelancerReq: {
    title: string;
    wantedSkills: string[] | undefined;
  };
  desc: string;
  createdAt: string;
  applicants: {
    Proposals: number;
  };
  onClick?: () => void;
}

const Index: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const match = useMediaQuery(breackPoint.mx);

  const toggleDrawer = (open: boolean) => () => {
    if (props.onClick) {
      props.onClick();
    } else {
      setOpen(open);
    }
  };

  const list = (
    <Box
      sx={{
        width: match ? "100vw" : "65vw",
        borderRadius: "15px ",
        padding: 4,
      }}
    >
      <Box
        mb={8}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <ArrowBackIosIcon onClick={toggleDrawer(false)} />
        <Link
          style={{
            color: colors.mainGreenColor,
            display: "flex",
            gap: 5,
            textDecorationColor: colors.mainGreenColor,
          }}
        >
          <ExpandIcon />
          <Typography
            color={colors.mainGreenColor}
            children={"Open job in a new window"}
          />
        </Link>
      </Box>
      {/* <JobDetails jobId={props.id} /> */}
    </Box>
  );

  return (
    <>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer(false)}
        children={list}
        sx={{ background: "#a4dd8330" }}
        PaperProps={{ borderRadius: "15px 0px 0px 15px" }}
      />
      <JobPostContainer onClick={toggleDrawer(true)}>
        <JobTitleContainer>
          <Link sx={{ color: "#000", textDecoration: 0 }}>
            <JobTitle children={props.task.title} />
          </Link>
          <IconContainer>
            {/* <ThumbDownOffAltIcon {...iconStyle} />
            <FavoriteBorderIcon {...iconStyle} /> */}
          </IconContainer>
        </JobTitleContainer>
        <JobDesc>
          <JobPayingInfo>
            <b>{props.task.pay.paymentType}</b> - {props.freelancerReq.title} -
            Est. Budget: ${props.task.pay.price} - Posted at {props.createdAt}
          </JobPayingInfo>
          {props.desc}
          <Stack
            paddingY={1}
            direction="row"
            rowGap={1}
            spacing={1}
            flexWrap={"wrap"}
          >
            {props.freelancerReq.wantedSkills?.map((skill, index) => (
              <SkillTag  key={index} />
            ))}
          </Stack>
          <JobProposalsInfo>
            Proposals: <b>{props.applicants.Proposals}</b>
          </JobProposalsInfo>
          <Box color="gray" display={"flex"} alignItems={"center"} gap={1}>
            <VerifiedIcon sx={{ width: "15px", height: "15px" }} color="info" />
            <Typography sx={{ fontWeight: 420, fontSize: "12px" }}>
              Payment verified
            </Typography>
            <Box display={"flex"}>
              <StarRateIcon
                sx={{ width: "15px", height: "15px" }}
                color="success"
              />
              <StarRateIcon
                sx={{ width: "15px", height: "15px" }}
                color="success"
              />
              <StarRateIcon
                sx={{ width: "15px", height: "15px" }}
                color="success"
              />
              <StarRateIcon
                sx={{ width: "15px", height: "15px" }}
                color="success"
              />
              <StarRateIcon
                sx={{ width: "15px", height: "15px" }}
                color="action"
              />
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <span style={{ color: "#000" }}>$10k+ </span>
              <span style={{ fontWeight: 380, fontSize: "12px" }}>spent</span>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <LocationOnIcon
                sx={{ width: "18px", height: "18px" }}
                color="action"
              />
              <span> Saudi Arabia</span>
            </Box>
          </Box>
        </JobDesc>
      </JobPostContainer>
    </>
  );
};

export default Index;
