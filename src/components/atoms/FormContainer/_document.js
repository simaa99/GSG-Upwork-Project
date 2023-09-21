import styled from "styled-components";
import colors from "../../../styles/colors.json";
import brackPoint from "../../../styles/breackPoint.json";

export const FormBox = styled.form({
  background: "#0000",
  border: `1px solid ${colors.mainGreenColor}30`,
  borderRadius: "10px",
  padding: "20px 50px",
  width: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px",
  flexDirection: "column",
  ["@media " + brackPoint.sx]: {
    width: "100%",
    border: 'none',
  },
});
