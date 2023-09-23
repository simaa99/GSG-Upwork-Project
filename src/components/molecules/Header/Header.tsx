"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Menu from "../Menu";
import SearchBar from "../SearchBar";
import Avatar from "../Avatar";
import Tab from "../Tab";
import Image from "next/image";
import colors from "@/styles/colors.json";
import breackPoint from "@/styles/breackPoint.json";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Search from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  DirectContacts,
  help,
  Help,
  Logout,
  menu,
  Message,
  Notification,
  Setting,
} from "@/mock/data.js";

interface MenuItem {
  title: string;
  icon?: JSX.Element;
  options?: Array<{
    title: string;
    optionHandle: () => void;
  }>;
}

interface TabItem {
  label: string;
  content: string[];
}

function Index() {
  const [searchKey, setSearchKey] = useState<string>("");

  const MX = useMediaQuery(breackPoint.mainPage.mx);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  useEffect(() => {
    setOpenDrawer(false);
  }, [MX]);

  const toggleDrawer = (open: boolean) => () => {
    setOpenDrawer(open);
  };

  const toggleSearch = (open: boolean) => () => {
    setOpenSearch(open);
  };

  const tabs: TabItem[] = [
    { label: "Jobs", content: ["Jobs"] },
    { label: "Talent", content: ["Talent"] },
    { label: "Projects", content: ["Projects"] },
  ];
  const mobileDrawerList: MenuItem[] = [
    menu.work,
    menu.job,
    menu.Reports,
    Message,
    Help,
    DirectContacts,
    Notification,
    Setting,
    Logout,
  ];

  const list = (
    <Box
      sx={{ width: "100vw" }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        padding={1}
        display="flex"
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <div onClick={toggleDrawer(false)}>
          <CloseIcon sx={{ fontSize: "30px" }} />
        </div>
        <Image src="/upwork.svg" width={100} height={80} alt="logo of upwork" />{" "}
        <div onClick={toggleSearch(true)}>
          <Search sx={{ fontSize: "30px" }} />
        </div>
      </Box>
      <List>
        <Avatar expand />
        <Divider />
        {mobileDrawerList.map((menu) => (
          <>
            {menu.options ? (
              <Accordion sx={{ padding: 1 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{menu.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {menu.options.map((option) => (
                      <ListItemText
                        onClick={option.optionHandle}
                        key={option.title}
                        primary={option.title}
                      />
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem key={menu.title} sx={{ padding: 1 }}>
                <ListItemButton sx={{ width: "100%" }}>
                  <ListItemText primary={menu.title} />
                  {menu.icon}
                </ListItemButton>
              </ListItem>
            )}
          </>
        ))}
        <Divider />
      </List>
    </Box>
  );

  const search = (
    <Box
      sx={{ width: "100vw" }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Box padding={1} display="flex" gap={3} flexDirection="column">
        <Box display="flex" justifyContent="space-between" width="100%">
          <ArrowBackIcon
            onClick={toggleSearch(false)}
            sx={{ fontSize: "30px" }}
          />
          <SearchBar hideMenu={true} />
        </Box>
        <Box>
          <Tab tabsGroup={tabs} />
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      display="flex"
      gap={2}
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      paddingLeft="1rem"
      paddingRight="1rem"
    >
      {MX ? (
        <>
          <div onClick={toggleDrawer(true)}>
            <MenuOutlinedIcon sx={{ fontSize: "30px" }} />
          </div>
          <Drawer
            transitionDuration={0}
            open={openDrawer}
            onClose={toggleDrawer(false)}
          >
            {list}
          </Drawer>
          <Drawer
            anchor="right"
            open={openSearch}
            onClose={toggleSearch(false)}
          >
            {search}
          </Drawer>
          <Image
            src="/upwork.svg"
            width={100}
            height={80}
            alt="logo of upwork"
          />
          <div onClick={toggleSearch(true)}>
            <Search sx={{ fontSize: "30px" }} />
          </div>
        </>
      ) : (
        <>
          <Box display="flex" alignItems="center" paddingLeft={"1rem"} paddingRight={"1rem"}>
            <Image
              src="/upwork.svg"
              width={85}
              height={80}
              alt="logo of upwork"
            />
            <Box display="flex" alignItems="center" paddingLeft={"1rem"}>
              <Menu menu={menu.work} />
              <Menu menu={menu.job} />
              <Menu menu={menu.Reports} />
              <Button
                id="demo-positioned-button"
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  width: "100px",
                  "&:hover": {
                    color: colors.mainGreenColor,
                    background: "#0000",
                  },
                  textTransform:"capitalize",cursor:"pointer"
                }}
              >
                Messages
              </Button>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <SearchBar
              value={searchKey}
              onChange={({ target: { value } }) => setSearchKey(value)}
              // onClick={() => nav(routes.searchPage, { state: { searchKey } })}
            />
            <Box display="flex" alignItems="center" gap={1} paddingX={2}>
              <Menu menu={help} type="help" />
              <Image src="/chat-icon.svg" width={25} height={30} alt="chat upwork" />
              <Image src="/not-icon.svg" width={25} height={30} alt="notification upwork" />
              <Avatar />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

export default React.memo(Index);
