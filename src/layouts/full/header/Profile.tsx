"use client"

import React, { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Badge,
  useTheme,
  styled
} from "@mui/material";

import { IconListCheck, IconMail, IconUser } from "@tabler/icons-react";

const Profile = () => {
  const theme = useTheme();
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  //styled component
  const StyledMenuItem = styled(MenuItem)(() => ({
    color: theme.palette.text.secondary,
    '&:hover': {
      background: theme.palette.secondary.main,         
      color: theme.palette.grey[100],
    },
  }));
  const StyledListItemIcon  = styled(ListItemIcon)(() => ({
    color: theme.palette.text.secondary,
  '&.MuiListItem:hover &': {
    background: theme.palette.secondary.main,         
    color: theme.palette.grey[100],
  },
  }));
  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: theme.palette.text.secondary,
          }),
        }}
        onClick={handleClick2}
      >

        <Badge
          //Online status dot
          overlap="circular"
          variant="dot"
          color="success"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Avatar
            alt="Khanh Quach"
            // src="/broken-image.jpg"
            src="/images/profile/user-1.jpg"
            sx={{
              width: 35,
              height: 35,
            }}
          />
        </Badge>

      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <StyledMenuItem>
          <StyledListItemIcon>
            <IconUser width={20} />
          </StyledListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledListItemIcon>
            <IconMail width={20} />
          </StyledListItemIcon>
          <ListItemText>Email</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledListItemIcon>
            <IconListCheck width={20} />
          </StyledListItemIcon>
          <ListItemText>My Tasks</ListItemText>
        </StyledMenuItem>
        <Box mt={1} py={1} px={2}>
          <Button
            href="/authentication/login"
            variant="outlined"
            color="success"
            component={Link}
            fullWidth
          >
            Login
          </Button>
        </Box>
        <Box mt={1} py={1} px={2}>
          <Button
            href="/authentication/login"
            variant="outlined"
            color="error"
            component={Link}
            fullWidth
          >
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
