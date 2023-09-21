import { Alert, Box } from "@mui/material";
import { styled } from "@mui/system";

export const InputContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 20,
  flexDirection: "column",
  width: "100%",
});

export const LoginContainer = styled("dev")({
  marginTop: "5rem",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function InputAlert({ err }) {
  return (
    <>
      {err && (
        <Alert
          sx={{ width: "100%", border: "none" , color:'#d32f2f'  , fontSize:'0.8rem'}}
          severity="error"
          children={err}
        />
      )}
    </>
  );
}
