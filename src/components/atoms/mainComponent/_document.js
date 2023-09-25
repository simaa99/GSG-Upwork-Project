import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import BreackPoint from '@/styles/breackPoint.json'

export const borderStyle = { overflow: "hidden", border: "1px solid #e4ebe5", borderRadius: "8px", width: "100%" }



export const MobileJobsGrid = styled(Grid)({
    ...borderStyle,
    display: "none",
    ["@media " + BreackPoint.mainPage.mx]: {
        display: "block"
    }
})


export const MainJobsGrid = styled(Grid)({
    ["@media " + BreackPoint.mainPage.mx]: {
        display: "none"
    },
    alignContent: "flex-start",
    width: "95%",
    gap: 10,
})


export const ProfileGrid = styled(Grid)({
    ["@media " + BreackPoint.mainPage.mx]: {
        display: "none"
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "90%",
    gap: 25,
})