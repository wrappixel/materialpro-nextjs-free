import React, { useState } from "react";

import Link from "next/link";
import {
  Box,
  Menu,
  Avatar,
  Typography,
  Button,
  IconButton,

} from "@mui/material";

import { Stack } from "@mui/system";


const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  interface ProfileType {
    href: string;
    title: string;
  }
  const profile: ProfileType[] = [
    {
      href: '/utilities/forms',
      title: 'My Profile',
    },
    {
      href: '/utilities/table',
      title: 'My Account',
    },
    {
      href: '/',
      title: 'My Dashboard',
    },
  ];


  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === 'object' && {
            color: 'primary.main',
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src='/images/profile/user-1.jpg'
          alt={'ProfileImg'}
          sx={{
            width: 35,
            height: 35,
          }}
        />
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
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '240px',
            p: 0,
          },
        }}
      >
        <Box paddingX={2}>
          {profile.map((profile) => (
            <Box key={profile.title}>
              <Box
                sx={{
                  px: 2,
                  py: '10px',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  },
                }}
                className="hover-text-primary"
              >
                <Link href={profile.href}>
                  <Typography
                    variant="subtitle2"
                    fontWeight={500}
                    color="textPrimary"
                    className="text-hover" component='span'
                    noWrap
                    sx={{
                      width: '240px',
                    }}
                  >
                    {profile.title}
                  </Typography>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
        <Box p={0}>
          <Box
            sx={{
              px: 2,
              py: '10px',
              '&:hover': {
                backgroundColor: 'primary.light',
              },
            }}
            className="hover-text-primary"
          >
            <Link href="/authentication/login">
              <Button variant="outlined" color="primary" sx={{ width: "100%" }} >
                Logout
              </Button>
            </Link>
          </Box>

        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
