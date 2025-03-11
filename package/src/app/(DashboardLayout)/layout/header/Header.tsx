import React, { useContext } from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import Logo from "../shared/logo/Logo";
// components
import Profile from './Profile';


import { DashboardContext } from '@/app/context/DashboardContext';
import { Icon } from '@iconify/react';
import Notifications from './Notifications';

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = () => {
  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const toggleWidth = '256px';

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none !important',
    background: theme.palette.primary.main,
    justifyContent: 'center',
    position: "fixed",
    top: "64px",
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.down('lg')]: {
      minHeight: '64px',
      top: "90px"
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '64px',
      top: "99px"
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '64px',
      top: "134px"
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.warning.contrastText,
    gap: '8px',
    padding: '0 20px',
  }));

  return (
    <AppBarStyled color="default" >
      <ToolbarStyled>
        {/* ------------------------------------------- */}
        {/* Logo */}
        {/* ------------------------------------------- */}

        {lgUp ? (
          <>
            <Box
              sx={{
                width: toggleWidth,
              }}
            >
              <Logo />
            </Box>
          </>
        ) : (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={
              lgUp
                ? () => { }
                : () => setIsMobileSidebar(!isMobileSidebar)
            }
          >
            <Icon icon="solar:list-bold" height={20} />
          </IconButton>
        )}
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}

        <Notifications />


        <Box flexGrow={1} />

        {lgUp ? (
          <>
            <Stack spacing={2} direction="row" alignItems="center">
              <Button variant="contained" color="success" target="_blank" href="https://www.wrappixel.com/templates/materialpro-nextjs-admin-dashboard-app-directory/?ref=376">
                Check Pro Template
              </Button>
              <Profile />
            </Stack>
          </>
        ) : (
          null
        )}
        {lgUp ? null : (
          <>
            <Stack spacing={2} direction="row" alignItems="center">
              <Button variant="contained" color="success" target="_blank" href="https://www.wrappixel.com/templates/materialpro-nextjs-admin-dashboard-app-directory/?ref=376">
                Check Pro Template
              </Button>
              <Profile />
            </Stack>
          </>
        )}
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
