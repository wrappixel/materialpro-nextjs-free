'use client';
import React from "react";
import { Box, Button, Typography } from "@mui/material";


const Upgrade = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: "center",
      gap: 2,
      m: 3, p: 3, bgcolor: `${'primary.light'}`, borderRadius: '8px'
    }}
  >
    <>
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>Check Pro
        Version</Typography>
        <Button color="primary" target="_blank" href="https://wrappixel.com/templates/materialpro-react-admin/?ref=376" variant="contained" aria-label="logout" size="small">
          Check
        </Button>
      </Box>
      <Box sx={{marginTop:"-35px",marginRight: "-38px"}}>
        <img alt="Remy Sharp" src='/images/backgrounds/rocket.png' width={100} />
      </Box>
    </>
  </Box>
);
export default Upgrade;
