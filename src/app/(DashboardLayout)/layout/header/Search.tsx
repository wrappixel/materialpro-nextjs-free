import React, { useState } from "react";

import { IconButton, Input, Box, Drawer } from "@mui/material";
import { IconSearch, IconX } from "@tabler/icons-react";



const Search = () => {
  // drawer top
  const [showDrawer2, setShowDrawer2] = useState(false);

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };
  return (
    <>
      <IconButton
        aria-label="show 4 new mails"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={() => setShowDrawer2(true)}
        size="large"
        sx={{color:'#fff'}}
      >
        <IconSearch height="22" width="22" strokeWidth="1.5"  />
      </IconButton>
      <Drawer
        anchor="top"
        open={showDrawer2}
        onClose={() => setShowDrawer2(false)}
        sx={{
          "& .MuiDrawer-paper": {
            padding: "15px 30px",
          },
        }}
      >
        <Box display="flex" alignItems="center">
          <Input placeholder="Search here" aria-label="description" fullWidth />
          <Box
            sx={{
              ml: "auto",
            }}
          >
            <IconButton
              onClick={handleDrawerClose2}
            >
              <IconX height="20" width="20" />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Search;

