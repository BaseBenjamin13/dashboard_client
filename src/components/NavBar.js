import { useState, useContext, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { tokens, ColorModeContext } from "../theme";
import NavBarItem from "./NavBarItem";
import { UserContext } from '../contexts/UserContext';
import { getIsMobile } from '../helpers/getIsMobile';


const NavBar = () => {

    const { user, setUser } = useContext(UserContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState("Dashboard");
    const colorMode = useContext(ColorModeContext);
    const [isCollapsed, setIsCollapsed] = useState(false);


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        getIsMobile(setIsMobile, setIsCollapsed);
    }, [])


    return (
        <Box sx={{
            "& .pro-sidebar": {
                // minWidth: 50,
                width: isCollapsed && isMobile ? 50 : !isCollapsed && isMobile ? 165 : null,
                minWidth: isCollapsed && isMobile ? 50 : !isCollapsed && isMobile ? 165 : null,
            },
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
                width: isCollapsed && isMobile ? 50 : !isCollapsed && isMobile ? 165 : null,
                // margin: isMobile ? 0 : null,
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
                padding: isCollapsed && isMobile ? "5px 0px 5px 8px !important" 
                : !isCollapsed && isMobile ? "5px 0px 5px 0px !important" 
                : "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",
            },
        }}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && user && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`profile.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    {user.companyName ? user.companyName : "N/A"}
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    {user.firstName} {user.lastName}
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box 
                        paddingLeft={
                            isCollapsed ? undefined 
                            : !isCollapsed && isMobile ? "1%" 
                            : "10%"
                        }
                    >
                        <MenuItem>
                            <IconButton onClick={colorMode.toggleColorMode}>
                                {theme.palette.mode === "dark" ? (
                                    <DarkModeOutlinedIcon />
                                ) : (
                                    <LightModeOutlinedIcon />
                                )}
                            </IconButton>
                        </MenuItem>

                        <NavBarItem
                            title={"Login"}
                            // title={user ? "Profile" : "Login"}
                            to={"/"}
                            // change this after making profile page
                            // to={user ? "/profile" : "/login"}
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <NavBarItem
                            title="Dashboard"
                            to="/dashboard"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <NavBarItem
                            title="Clients"
                            to="/clients"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <NavBarItem
                            title="Invoices"
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        {/* <NavBarItem
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        /> */}
                        <NavBarItem
                            title="About Us"
                            to="/about"
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        {/* <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        <NavBarItem
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <NavBarItem
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <NavBarItem
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <NavBarItem
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        /> */}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};
export default NavBar;



// Learning Material UI & react-pro-slider from https://www.youtube.com/watch?v=wYpCWwD1oz0