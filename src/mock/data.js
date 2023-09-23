import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import Image from "next/image";

export const menu = {
  work: {
    title: "Find Work",
    options: [
      {
        title: "Find Work",
        optionHandle: () => console.log("first"),
      },
      {
        title: "Saved Works",
        optionHandle: () => console.log("first"),
      },
      {
        title: "Proposal",
        optionHandle: () => console.log("first"),
      },
      {
        title: "Profile",
        optionHandle: () => console.log("first"),
      },
      {
        title: "My state",
        optionHandle: () => console.log("first"),
      },
      {
        title: "My Project Dashboard",
        optionHandle: () => console.log("first"),
      },
    ],
  },
  job: {
    title: "My Jobs",
    options: [
      {
        title: "My Job",
        optionHandle: () => console.log("first"),
      },
      {
        title: "All Contracts",
        optionHandle: () => console.log("first"),
      },
      {
        title: "Work Diary",
        optionHandle: () => console.log("first"),
      },
    ],
  },
  Reports: {
    title: "Reports",
    options: [
      {
        title: "Overview",
        optionHandle: () => console.log("first"),
      },
      {
        title: "My Reports",
        optionHandle: () => console.log("first"),
      },
      {
        title: "Billings & Earnings",
        optionHandle: () => console.log("first"),
      },
      {
        title: "Connects History",
        optionHandle: () => console.log("first"),
      },
      {
        title: "Transaction history",
        optionHandle: () => console.log("first"),
      },
      {
        title: "Certificate of Earnings",
        optionHandle: () => console.log("first"),
      },
    ],
  },
};

export const Message = {
  title: "Messages",
  optionHandle: () => console.log("first"),
};

export const Help = {
  title: "Help",
  icon:  <Image src="/help-icon.svg" width={25} height={25} alt="help upwork" />,
  optionHandle: () => console.log("first"),
};

export const DirectContacts = {
  title: "Direct Contacts",
  icon:  <Image src="/chat-icon.svg" width={25} height={30} alt="chat upwork" />,
  optionHandle: () => console.log("first"),
};

export const Notification = {
  title: "Notification",
  icon: <Image src="/not-icon.svg" width={25} height={30} alt="notification upwork" />,
  optionHandle: () => console.log("first"),
};

export const Logout = {
  title: "Logout",
  icon: <LogoutIcon color="#000" />,
  optionHandle: () => console.log("first"),
};
export const Setting = {
  title: "Setting",
  icon: <SettingsIcon color="#000" />,
  optionHandle: () => console.log("first"),
};

export const help = {
  title: (
    <Image src="/help-icon.svg" width={25} height={25} alt="help upwork" />
  ),
  options: [
    {
      title: "Help and Support",
      optionHandle: () => console.log("first"),
    },
    {
      title: "Community and Forums",
      optionHandle: () => console.log("first"),
    },
    {
      title: "My Requests",
      optionHandle: () => console.log("first"),
    },
  ],
};
