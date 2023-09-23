import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import colors from "@/styles/colors.json";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface MenuOption {
  title?: string;
  optionHandle?: () => void;
}

interface MenuProps {
  title?: string;
  options: MenuOption[];
}

interface PositionedMenuProps {
  menu: MenuProps;
  type?: string;
}

export default function PositionedMenu({ menu, type }: PositionedMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={type ? undefined : handleClick}
        onClick={type ? handleClick : undefined}
        sx={{
          color: menu.title === "Find Work" ? colors.mainGreenColor : "#000",
          fontSize: "14px",
          width: type ? "fit-content" : "fit-content",
          textTransform: "capitalize",
          cursor: "pointer",
        }}
      >
        {menu.title || "Dashboard"}
        {type ? undefined : (
          <KeyboardArrowDownIcon sx={{ fontSize: "13px", color: "#000" }} />
        )}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {menu.options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={option.optionHandle}
            children={option.title || "option"}
            sx={{
              color:
                option.title === menu.title ? colors.mainGreenColor : "#000",
              fontSize: "14px",
              fontWeight: 450,
              width: "280px",
            }}
          />
        )) || <MenuItem onClick={handleClose}>Profile</MenuItem>}
      </Menu>
    </div>
  );
}
