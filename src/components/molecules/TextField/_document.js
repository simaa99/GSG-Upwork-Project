import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const InputFeild = styled(TextField)({
    width: "100%",
    "input": {
        paddingTop:0,
        paddingBottom: 0,
        color:'#000',
    },
    "& input::placeholder": {
      color: "#696969",
      fontSize:"0.65rem",
    },
    
})