'use client';
import React from "react";
import { Box, Button, Typography } from "@mui/material";


const Upgrade = () => (
  <Box
    display={'flex'}
    alignItems="center"
    gap={2}
    sx={{ m: 3, p: 3, bgcolor: `${'primary.light'}`, borderRadius: '8px' }}
  >
    <>
      <Box>
        <Typography variant="h6" mb={1}>Check Pro
        Version</Typography>
        <Button color="primary" target="_blank" href="https://www.wrappixel.com/templates/materialpro-react-admin/?ref=376" variant="contained" aria-label="logout" size="small">
          Check
        </Button>
      </Box>
      <Box sx={{marginTop:"-35px",marginRight: "-30px"}}>
        <img alt="Remy Sharp" src='/images/backgrounds/rocket.png' width={100} />
      </Box>
    </>
  </Box>
);
export default Upgrade;
