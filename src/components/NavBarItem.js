import React from 'react'
import { MenuItem } from "react-pro-sidebar";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";

function NavBarItem({ title, to, icon, selected, setSelected }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography fontSize={24}>{title}</Typography>
            <Link to={to} />
        </MenuItem>
  )
}

export default NavBarItem
