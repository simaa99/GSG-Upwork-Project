import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";


interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export default function HeaderAuthComponent(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "white", boxShadow: 0 }}>
        <Toolbar>
          <Image
            src="/upwork.svg"
            width={100}
            height={80}
            alt="logo of upwork"
          />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
