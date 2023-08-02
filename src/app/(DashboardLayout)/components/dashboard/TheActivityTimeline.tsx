import React from "react";

import {
  Card,
  Box,
  Avatar,
  Stack,
  Typography,
  Grid,
  Button,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { IconHeartFilled, IconMessage } from "@tabler/icons-react";

import CustomFormLabel from "../forms/theme-elements/CustomFormLabel";
import CustomTextField from "../forms/theme-elements/CustomTextField";
import CustomSelect from "../forms/theme-elements/CustomSelect";

const ActivityTimeline = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // select
  const [number, setNumber] = React.useState("");

  const handleChange3 = (event: any) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <Card variant="outlined" sx={{ p: 0 }}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="fullWidth"
              >
                <Tab label="Activity" value="1" />
                <Tab label="Profile" value="2" />
                <Tab label="Settings" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Timeline
                sx={{
                  mt: -2,
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: "transparent",
                        margin: 0,
                        boxShadow: "none",
                      }}
                    >
                      <Avatar src="/images/users/1.jpg" alt="user" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="h6">John Doe</Typography>
                      <Typography variant="subtitle1" fontSize="12px">
                        5 minutes ago
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle1" fontSize="12px" mb={2}>
                      assign a new task Design weblayout
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={4} lg={3}>
                        <Avatar
                          src="/images/big/img1.jpg"
                          alt="bg1"
                          sx={{ borderRadius: 0, width: "100%", height: 135 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4} lg={3}>
                        <Avatar
                          src="/images/big/img2.jpg"
                          alt="bg1"
                          sx={{ borderRadius: 0, width: "100%", height: 135 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4} lg={3}>
                        <Avatar
                          src="/images/big/img3.jpg"
                          alt="bg1"
                          sx={{ borderRadius: 0, width: "100%", height: 135 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4} lg={3}>
                        <Avatar
                          src="/images/big/img4.jpg"
                          alt="bg1"
                          sx={{ borderRadius: 0, width: "100%", height: 135 }}
                        />
                      </Grid>
                    </Grid>
                    <Stack direction="row" spacing={1} mb={3}>
                      <Button
                        size="small"
                        color="primary"
                        startIcon={<IconMessage width={18} />}
                      >
                        Comments
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        startIcon={<IconHeartFilled width={18} />}
                      >
                        5 Likes
                      </Button>
                    </Stack>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: "transparent",
                        margin: 0,
                        boxShadow: "none",
                      }}
                    >
                      <Avatar src="/images/users/2.jpg" alt="user" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="h6">James Smith</Typography>
                      <Typography variant="subtitle1" fontSize="12px">
                        5 minutes ago
                      </Typography>
                    </Stack>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={4} lg={3}>
                        <Avatar
                          src="/images/big/img4.jpg"
                          alt="bg1"
                          sx={{ borderRadius: 0, width: "100%", height: 135 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={8} lg={9}>
                        <Typography
                          variant="subtitle1"
                          fontSize="12px"
                          mb={2}
                          mt={1}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nec odio. Praesent libero. Sed cursus
                          ante dapibus diam.
                        </Typography>
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                        >
                          Design Layout
                        </Button>
                      </Grid>
                    </Grid>
                    <Stack direction="row" spacing={1} mb={3}>
                      <Button
                        size="small"
                        color="primary"
                        startIcon={<IconMessage width={18} />}
                      >
                        Comments
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        startIcon={<IconHeartFilled width={18} />}
                      >
                        5 Likes
                      </Button>
                    </Stack>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: "transparent",
                        margin: 0,
                        boxShadow: "none",
                      }}
                    >
                      <Avatar src="/images/users/3.jpg" alt="user" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="h6">Maria Smith</Typography>
                      <Typography variant="subtitle1" fontSize="12px">
                        5 minutes ago
                      </Typography>
                    </Stack>
                    <Typography
                      variant="subtitle1"
                      fontSize="12px"
                      mb={2}
                      mt={1}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam. Sed nisi. Nulla quis sem at nibh elementum
                      imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
                      tellus sed augue semper
                    </Typography>
                    <Stack direction="row" spacing={1} mb={3}>
                      <Button
                        size="small"
                        color="primary"
                        startIcon={<IconMessage width={18} />}
                      >
                        Comments
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        startIcon={<IconHeartFilled width={18} />}
                      >
                        5 Likes
                      </Button>
                    </Stack>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: "transparent",
                        margin: 0,
                        boxShadow: "none",
                      }}
                    >
                      <Avatar src="/images/users/4.jpg" alt="user" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      mb={1}
                    >
                      <Typography variant="h6">John Smith</Typography>
                      <Typography variant="subtitle1" fontSize="12px">
                        5 minutes ago
                      </Typography>
                    </Stack>
                    <Box
                      bgcolor="primary.light"
                      color="primary.main"
                      fontSize="12px"
                      p={2}
                      mb={3}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: "transparent",
                        margin: 0,
                        boxShadow: "none",
                      }}
                    >
                      <Avatar src="/images/users/5.jpg" alt="user" />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      mb={1}
                    >
                      <Typography variant="h6">John Smith</Typography>
                      <Typography variant="subtitle1" fontSize="12px">
                        5 minutes ago
                      </Typography>
                    </Stack>
                    <Box
                      bgcolor="secondary.light"
                      color="secondary.main"
                      fontSize="12px"
                      p={2}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </TabPanel>
            <TabPanel value="2">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle1" fontWeight="500">
                    Full Name
                  </Typography>
                  <Typography variant="subtitle2" fontSize="12px">
                    Johnathan Deo
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle1" fontWeight="500">
                    Mobile
                  </Typography>
                  <Typography variant="subtitle2" fontSize="12px">
                    (123) 456 7890
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle1" fontWeight="500">
                    Email
                  </Typography>
                  <Typography variant="subtitle2" fontSize="12px">
                    johnathan@admin.com
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle1" fontWeight="500">
                    Location
                  </Typography>
                  <Typography variant="subtitle2" fontSize="12px">
                    London
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="subtitle2" fontSize="12px" mt={4}>
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo. Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim.
              </Typography>
              <Typography variant="subtitle2" fontSize="12px" mt={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </Typography>
              <Typography variant="subtitle2" fontSize="12px" mt={2}>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </Typography>

              <Typography variant="h6" mt={5} mb={4}>
                Skill set
              </Typography>

              <Stack spacing={3}>
                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={1}
                  >
                    <Typography variant="subtitle1" mb={1}>
                      Wordpress
                    </Typography>
                    <Typography variant="subtitle1">80%</Typography>
                  </Stack>
                  <LinearProgress
                    color="primary"
                    variant="determinate"
                    value={80}
                  />
                </Box>
                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={1}
                  >
                    <Typography variant="subtitle1" mb={1}>
                      React
                    </Typography>
                    <Typography variant="subtitle1">50%</Typography>
                  </Stack>
                  <LinearProgress
                    color="secondary"
                    variant="determinate"
                    value={50}
                  />
                </Box>
                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={1}
                  >
                    <Typography variant="subtitle1" mb={1}>
                      VueJs
                    </Typography>
                    <Typography variant="subtitle1">45%</Typography>
                  </Stack>
                  <LinearProgress
                    color="error"
                    variant="determinate"
                    value={45}
                  />
                </Box>
                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={1}
                  >
                    <Typography variant="subtitle1" mb={1}>
                      NextJs
                    </Typography>
                    <Typography variant="subtitle1">15%</Typography>
                  </Stack>
                  <LinearProgress
                    color="info"
                    variant="determinate"
                    value={15}
                  />
                </Box>
              </Stack>
            </TabPanel>
            <TabPanel value="3">
              <form>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-name"
                >
                  Name
                </CustomFormLabel>
                <CustomTextField id="text-name" variant="outlined" fullWidth />
                <CustomFormLabel htmlFor="text-email">Email</CustomFormLabel>
                <CustomTextField id="text-email" variant="outlined" fullWidth />
                <CustomFormLabel htmlFor="text-password">
                  Password
                </CustomFormLabel>
                <CustomTextField
                  id="text-password"
                  type="password"
                  variant="outlined"
                  fullWidth
                />
                <CustomFormLabel htmlFor="text-address">
                  Address
                </CustomFormLabel>
                <CustomTextField
                  id="text-address"
                  variant="outlined"
                  fullWidth
                />
                <CustomFormLabel htmlFor="text-address">Select</CustomFormLabel>
                <CustomSelect
                  fullWidth
                  id="standard-select-number"
                  variant="outlined"
                  value={1}
                  onChange={handleChange3}
                  sx={{
                    mb: 2,
                  }}
                >
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </CustomSelect>

                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </form>
            </TabPanel>
          </TabContext>
        </Box>
      </Card>
    </>
  );
};

export default ActivityTimeline;
