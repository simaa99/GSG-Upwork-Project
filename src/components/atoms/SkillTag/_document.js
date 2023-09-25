import styled from "styled-components";
import { Chip } from "@mui/material";
import colors from "@/styles/colors.json";

export const Tag = styled(Chip)`
  font-size: 12px;
  height: 30px;
  font-weight: 450;
  color: #828688;
  background: ${colors.tagColor};
`;
