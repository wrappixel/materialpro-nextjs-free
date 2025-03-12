import React from "react";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";
import {
  Sidebar as MUI_Sidebar,
  Menu,
  MenuItem,
  Submenu,
} from "react-mui-sidebar";
import Menuitems from "./MenuItems";
import Link from "next/link";
import { Icon } from "@iconify/react";




const renderMenuItems = (items: any[], pathDirect: string) => {

  return items.map((item) => {
    const Itemicon = <Icon icon={item.icon} width="20" height="20" />

    if (item.subheader) {
      // Display Subheader
      return (
        <Box sx={{ margin: "0 -24px", textTransform: 'uppercase', '& .MuiListSubheader-root': { fontWeight: '600 !important' } }} key={item.subheader}>
          <Menu subHeading={item.subheader} key={item.subheader}>
            <></>
          </Menu>
        </Box>
      );
    }

    //If the item has children (submenu)
    if (item.children) {
      return (
        <Submenu key={item.id} title={item.title}
          borderRadius='999px'
          icon={Itemicon}
        >
          {renderMenuItems(item.children, pathDirect)
          }
        </Submenu >
      );
    }

    // If the item has no children, render a MenuItem

    return (
      <MenuItem
        key={item.id}
        isSelected={pathDirect === item?.href}
        icon={Itemicon}
        component="div"
        link={item.href && item.href !== "" ? item.href : undefined}
        target={item.href && item.href.startsWith("https") ? "_blank" : "_self"}
        badge={item.chip ? true : false}
        badgeContent={item.chip || ""}
        badgeColor="secondary"
        badgeTextColor="#1b84ff"
        disabled={item.disabled}
        borderRadius='999px'
      >
        <Link href={item.href} passHref legacyBehavior >
          <a target={item.href.startsWith("https") ? "_blank" : "_self"} rel="noopener noreferrer">
            <Typography component='span' color={pathDirect === item?.href ? '#fff' : 'inherit'}>
              {item.title}</Typography>
          </a>
        </Link>
      </MenuItem>
    );
  });
};

const SidebarItems = () => {
  const pathname = usePathname();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: "16px", overflowX: "hidden" }}>
      <MUI_Sidebar
        width={"100%"}
        showProfile={false}
        themeColor="#31c1ca"
        themeSecondaryColor="#EDF5FD"
      >
        {renderMenuItems(Menuitems, pathDirect)}

      </MUI_Sidebar>

    </Box>
  );
};

export default SidebarItems;
