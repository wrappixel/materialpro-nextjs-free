import { Box, Avatar, Typography, useMediaQuery,Tooltip, IconButton } from "@mui/material";
export const SidebarProfile = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/images/backgrounds/sidebar-profile-bg.jpg')`,
        borderRadius: "0 !important",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <>
        <Box px="12px" py="28px" borderRadius="0 !important">
          <Avatar
            alt="Remy Sharp"
            src={"/images/users/user2.jpg"}
            sx={{ height: 50, width: 50 }}
          />
        </Box>

        <Box display="flex" alignItems="center" sx={{ py: 1, px: 2, bgcolor: "rgba(0,0,0,0.5)", borderRadius: "0 !important" }}>
          <Typography
            variant="h6"
            fontSize="13px"
            color="white"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            Julia Roberts
          </Typography>
        </Box>
      </>
    </Box>
  );
};
