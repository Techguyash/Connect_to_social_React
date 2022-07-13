import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  styled,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { Notifications, Mail, Pets } from "@mui/icons-material";

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          connect2Social
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }}></Pets>
        <Search>
          <InputBase placeholder="Search..." color="error"></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            src="https://images.pexels.com/photos/4091205/pexels-photo-4091205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={(e) => setMenuOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setMenuOpen(true)}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            src="https://images.pexels.com/photos/4091205/pexels-photo-4091205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="span">John Doe</Typography>
        </UserBox>
      </StyledToolBar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={menuOpen}
        onClose={(e) => setMenuOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>My account</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
