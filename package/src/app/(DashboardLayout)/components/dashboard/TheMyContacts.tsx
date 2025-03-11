import React from "react";
import {
  Typography,
  Avatar,
  Box,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Badge,
} from "@mui/material";

const contacts = [
  {
    img: "/images/users/1.jpg",
    title: "Oliver Jake",
    subtext: "info@oliver.com",
    status: "primary.main",
  },
  {
    img: "/images/users/2.jpg",
    title: "Jack Connor",
    subtext: "info@jack.com",
    status: "secondary.main",
  },
  {
    img: "/images/users/3.jpg",
    title: "Harry Callum",
    subtext: "info@harry.com",
    status: "error.main",
  },
  {
    img: "/images/users/4.jpg",
    title: "Jacob Reece",
    subtext: "info@jacob.com",
    status: "warning.main",
  },
];

const MyContacts = () => {
  return (
    <>
      <Card variant="outlined" sx={{ p: 0 }}>
        <Box
          px={3}
          py={2}
          bgcolor="primary.main"
          color="white"
          borderRadius="0 !important"
          mb="-15px"
        >
          <Typography variant="h5">My Contacts</Typography>
          <Typography variant="subtitle1">Checkout my contacts here</Typography>
        </Box>
        <Box pt={2}>
          <List>
            {contacts.map((contact, i) => (
              <ListItem key={i}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Badge
                      variant="dot"
                      sx={{
                        ".MuiBadge-badge": {
                          backgroundColor: contact.status,
                        },
                      }}
                    >
                      <Avatar src={contact.img} alt="1" />
                    </Badge>
                  </ListItemAvatar>
                  <ListItemText
                    primary={contact.title}
                    primaryTypographyProps={{
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                    secondary={contact.subtext}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Card>
    </>
  );
};

export default MyContacts;
