import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";

interface TabPanelProps {
  content: Array<any>;
  value: number;
  Component?: React.ElementType;
  index: number;
  other?: any;
}

function TabPanel({
  content,
  value,
  Component,
  index,
  ...other
}: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index &&
        (Component && content.length ? (
          <Box>
            {content.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <Component {...row} />
                {rowIndex + 1 !== content.length && (
                  <Divider variant="fullWidth" />
                )}
              </React.Fragment>
            ))}
          </Box>
        ) : (
          <h2>No Data ?</h2>
        ))}
    </div>
  );
}

interface TabGroup {
  label: string;
  content: Array<any>;
  component?: React.ElementType;
}

interface BasicTabsProps {
  tabsGroup: Array<TabGroup>;
}

export default function BasicTabs({ tabsGroup }: BasicTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabsGroup.map(({ label, content }, index) => (
            <Tab
              key={index}
              label={`${label} (${content.length})`}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {tabsGroup.map(({ content, component }, index) => (
        <TabPanel
          content={content}
          Component={component}
          index={index}
          value={value}
          key={index}
        />
      ))}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
