import {
  Box,
  CardContent,
  CardMedia,
  Card,
  Typography,
  Stack,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import { IconClock, IconMessageCircle2 } from "@tabler/icons-react";

const ProfileCard = () => {
  return (
    <Card variant="outlined" sx={{ p: 0 }}>
      <CardMedia
        sx={{ height: 225 }}
        image="/images/backgrounds/login-register.jpg"
        title="green iguana"
      />
      <CardContent>
        <Box textAlign="center" mt="-80px">
          <Avatar
            src="/images/users/1.jpg"
            sx={{ width: 100, height: 100, m: "0 auto" }}
          />
          <Typography variant="h5" mt={4}>
            Jonathan Dominic
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" mb={2}>
            Web Designer & Developer
          </Typography>
          <Button variant="contained" color="primary">
            Follow
          </Button>
        </Box>
        <Stack
          direction="row"
          spacing={1}
          mt={7}
          justifyContent="space-between"
        >
          <Box textAlign="center">
            <Typography variant="h5">1,099</Typography>
            <Typography variant="subtitle2" fontSize="12px">
              Articles
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5">23,469</Typography>
            <Typography variant="subtitle2" fontSize="12px">
              Followers
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5">6,035</Typography>
            <Typography variant="subtitle2" fontSize="12px">
              Following
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
