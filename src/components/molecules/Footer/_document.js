import styled from "@emotion/styled";
import { Link, Box } from "@mui/material";
import colors from "@/styles/colors.json";
import Image from "next/image";

export const FooterBoxLink = styled(Link)({
  display: "block",
  color: "#fff",
  fontSize: "14px",
  fontFamily: "sans-serif",
  textDecoration: "none",
  width: "fit-content",
  ":hover": {
    textDecoration: "underline",
  },
});

export const SocialLink = styled(Image)({
  border: "1px solid #fff",
  borderRadius: "50%",
  padding: 8,
  width: "40px",
  height: "40px",
  margin: "auto",
  ":hover": {
    background: "#fff4",
  },
});
export const FooterBox = styled(Box)({
  background: colors.footerBGDarkGreen,
  display: "flex",
  gap: 5,
  alignItems: "center",
  justifyContent: "center",
  height: "fit-content",
  gap: 2,
  marginLeft: "1rem",
  marginRight: "1rem",
  marginBottom: "1rem",
  position: "relative",
  bottom: "0",
  borderRadius: "10px",
  "&>p ,a": {
    color: "#fff",
    height: "fit-content",
    fontSize: "13px",
    fontWeight: 500,
  },
});
