"use client"

import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// components
import Profile from './Profile';
import { IconBellRinging, IconMenu, IconSettings, IconMail } from '@tabler/icons-react';
import DarkModeToggle from '@/layouts/full/header/DarkModeToggle/DarkModeToggle';
import { useSession } from 'next-auth/react';

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  const theme = useTheme();
  const { data: session } = useSession()

  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    color: theme.palette.text.secondary,
  }));
  return (
    <AppBarStyled position="sticky"
      style={{ background: theme.palette.primary.main }}
    >
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
          style={{ color: theme.palette.secondary.main }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        {/* <IconButton
          size="large"
          aria-label="show 11 new notifications"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          style={{ color: theme.palette.secondary.main }}
        >
          <Badge color="warning" badgeContent={2} max={99}>
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>
        </IconButton> */}

        {/* <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          style={{ color: theme.palette.secondary.main }}
        >
          <IconSettings size="21" stroke="1.5" />
        </IconButton> */}

        {/* <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          style={{ color: theme.palette.secondary.main }}
        >
          <Badge color="warning" badgeContent={100} max={99}>
            <IconMail size="21" stroke="1.5" />
          </Badge>
        </IconButton> */}

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          {/* <Button
            startIcon={<IconBellRinging />}
            color="secondary"            
            size='small' disableElevation variant="contained" href="">
            Chức năng 1
          </Button>
          <Button endIcon={<IconMail />} size='small' variant="contained" disableElevation color="secondary" href="">
            Chức năng 2
          </Button>
          <Button size='small' variant="contained" disableElevation color="secondary" href="">
            Chức năng 3
          </Button> */}
          <DarkModeToggle />
          {session?.user && <Profile />}
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
