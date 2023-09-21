import React from 'react';
import { AppleLogin, CustomButton, GoogleLogin, LoginIcon, RegisterOutline } from './_document';
import buttons from '../../../styles/buttons.json';

interface IndexProps {
  onClick?: () => void;
  disabled?: boolean;
  sx?: React.CSSProperties; 
  text?: string;
  loginType?: any;
}

export default function Index({ onClick, disabled, sx, text, loginType }: IndexProps) {
  const styleType = {
    [buttons.google]: { style: GoogleLogin, image: "./login-google-icon.png", text: "Connect with Google" },
    [buttons.apple]: {
      style: AppleLogin,
      image: './login-apple-icon.png',
      imageStyle: { position: "relative", height: "20px" },
      text: "Connect with Apple",
    },
    [buttons.register]: {
      style: RegisterOutline,
      text: "Sign Up",
    },
  }[loginType];

  return (
    <CustomButton
      disabled={disabled}
      onClick={onClick}
      sx={{ ...styleType?.style, ...sx }}
      variant="contained"
    >
      <LoginIcon src={styleType?.image} style={styleType?.imageStyle} />
      {text || styleType?.text || "Login"}
    </CustomButton>
  );
}
