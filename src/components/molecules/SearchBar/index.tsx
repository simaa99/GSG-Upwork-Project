import {
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Box } from "@mui/system";

interface SearchOption {
  label: string;
  dec: string;
  icon: JSX.Element;
  value: string;
}

interface IndexProps {
  hideMenu?: boolean;
  sx?: React.CSSProperties;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export default function Index({
  hideMenu,
  sx,
  value,
  onChange,
  onClick,
}: IndexProps) {
  const searchOptions: SearchOption[] = [
    {
      label: "Jobs",
      dec: "Apply to jobs posted by clients",
      icon: (
        <Image
          src="/task.svg"
          width={25}
          height={30}
          alt="notification upwork"
        />
      ),
      value: "Jobs",
    },
    {
      label: "Talent",
      dec: "Find freelancers and agencies",
      icon: (
        <Image
          src="/people.svg"
          width={25}
          height={30}
          alt="notification upwork"
        />
      ),
      value: "Talent",
    },
    {
      label: "Project",
      dec: "See projects from other pros",
      icon: (
        <Image
          src="/card.svg"
          width={25}
          height={30}
          alt="notification upwork"
        />
      ),
      value: "Project",
    },
  ];

  return (
    <TextField
      sx={{
        height: "100%",
        paddingY: 0,
        width: hideMenu ? "90%" : undefined,
        ...sx,
      }}
      InputProps={{
        placeholder: "Search",
        sx: {
          height: "40px",
          paddingY: 0,
          borderRadius: "30px",
          fontSize: "14px",
          color: "#000",
        },
        value: value || "",
        onChange: onChange || undefined,
        endAdornment: !hideMenu && (
          <FormControl sx={{ height: "100%", paddingY: 0, width: "130px" }}>
            <Select
              defaultValue={"Jobs"}
              renderValue={(value) => {
                return (
                  <Typography
                    paddingX={2}
                    paddingTop="0.2rem"
                    variant="h6"
                    fontSize="14px"
                    children={value}
                  />
                );
              }}
              variant="standard"
              sx={{ height: "100%" }}
            >
              {searchOptions.map((option) => (
                <MenuItem selected value={option.value} key={option.value}>
                  <Box display="flex" gap={1} width="100%" >
                    {option.icon}
                    <Box>
                      <Typography
                        variant="h6"
                        fontSize="12px"
                        children={option.label}
                      />
                      <Typography
                        variant="body2"
                        fontSize="10px"
                        children={option.dec}
                      />
                    </Box>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ),
        startAdornment: (
          <InputAdornment position="end">
            <SearchIcon
              onClick={onClick}
              sx={{
                width: "23px",
                color: "#000",
                position: "relative",
                right: "8px",
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
}
