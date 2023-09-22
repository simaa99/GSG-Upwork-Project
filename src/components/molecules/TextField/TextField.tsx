import React, { useState, ChangeEvent } from "react";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LockSharpIcon from "@mui/icons-material/LockSharp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { InputAdornment, Input, InputBaseComponentProps } from "@mui/material";
import { InputFeild } from "./_document";

interface IndexProps {
  icon?: "email" | "password";
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  err: any;
  type?: "text" | "password" | "email"; // Add other valid types as needed
  sx?: React.CSSProperties;
}

export default function Index({
  icon,
  value,
  name,
  onChange,
  placeholder,
  err,
  type,
  sx,
}: IndexProps) {
  const [viewPassword, setViewPassword] = useState(false);

  const viewAbility = () => setViewPassword((prev) => !prev);

  const getIcon = (icon: "email" | "password" | undefined) => {
    switch (icon) {
      case "email":
        return <PersonSharpIcon sx={{ color: "#000" }} />;
      case "password":
        return <LockSharpIcon sx={{ color: "#000" }} />;
      default:
        return null; 
    }
  };
  
  const Icon = getIcon(icon);
  

  const inputProp: InputBaseComponentProps = {
    style: {
      height: "40px",
      borderRadius: "8px",
      border: err ? "1px solid red" : undefined,
    },
    startAdornment: Icon && (
      <InputAdornment position="start">{Icon}</InputAdornment>
    ),
    endAdornment: icon === "password" && (
      <InputAdornment position="end">
        {viewPassword ? (
          <VisibilityIcon onClick={viewAbility} />
        ) : (
          <VisibilityOffIcon onClick={viewAbility} />
        )}
      </InputAdornment>
    ),
  };

  return (
    <InputFeild
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      type={type === "password" ? (viewPassword ? "password" : "text") : type}
      inputProps={inputProp}
      sx={sx}
    />
  );
}
