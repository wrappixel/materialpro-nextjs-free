import { useMediaQuery, Box, Drawer } from "@mui/material";
import DarkLogo from "../shared/logo/LogoDark";
import SidebarItems from "./SidebarItems";
import Upgrade from "./Updrade";
import { SidebarProfile } from './SidebarProfile';
import { useContext } from "react";
import { DashboardContext } from "@/app/context/DashboardContext";
import Scrollbar from "../../custom-scroll/Scrollbar";



const Sidebar = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);

  const sidebarWidth = "270px";

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          zIndex: 100,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
              border: "0",
              top: "128px",

              boxShadow: "1px 0 20px #00000014",
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: "100%",
            }}

          >
            <Box sx={{
              height: "calc(100vh - 70px)",
              overflow: "auto",
              borderRadius: "0px",
            }}>
              <Scrollbar sx={{
                height: "calc(100% - 73px)"
              }}>
                {/* ------------------------------------------- */}
                {/* Sidebar Items */}
                {/* ------------------------------------------- */}
                <SidebarProfile />
                <Box mt={3}><SidebarItems /></Box>
                <Upgrade />
              </Scrollbar>
            </Box>
          </Box>
        </Drawer >
      </Box >
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebar}
      onClose={() => setIsMobileSidebar(!isMobileSidebar)}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box px={2}>
        <DarkLogo />
      </Box>
      <Scrollbar sx={{ height: "calc(100% - 73px)" }}>
        {/* ------------------------------------------- */}
        {/* Sidebar For Mobile */}
        {/* ------------------------------------------- */}
        <SidebarProfile />
        <Box mt={3}><SidebarItems /></Box>
        <Upgrade />
      </Scrollbar>
    </Drawer>
  );
};

export default Sidebar;
