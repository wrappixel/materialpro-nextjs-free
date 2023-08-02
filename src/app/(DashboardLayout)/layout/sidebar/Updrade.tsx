'use client';
import React from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import sidebarBuynowsvg from "public/images/backgrounds/sidebar-buynow-bg.svg";

const Upgrade = () => (
  <Box pb={0} mt={5}>
    <Box
      pl={3}
      pr={3}
      m={3}
      textAlign="center"
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.light,
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Image
        src={sidebarBuynowsvg}
        alt={sidebarBuynowsvg}
        className="buyNowImg"
      />
      <Box pb={3} pt={3}>
        <Typography variant="h6" fontWeight="700" mb={2}>
          Get This for Free
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          href="#"
          target="_blank"
          sx={{ marginBottom: "10px" }}
        >
          Download Free
        </Button>

        <Button
          color="secondary"
          href="https://www.wrappixel.com/templates/materialpro-nextjs-admin-dashboard-app-directory"
          fullWidth
          target="_blank"
          disableElevation
          variant="contained"
        >
          Check Pro
        </Button>
      </Box>
    </Box>
  </Box>
);
export default Upgrade;
