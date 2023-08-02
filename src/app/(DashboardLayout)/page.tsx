'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/TheSalesOverview';
import Blogcard from '@/app/(DashboardLayout)/components/dashboard/TheBlogCard';
import ProfileCard from "@/app/(DashboardLayout)/components/dashboard/TheProfileCard";
import MyContacts from "@/app/(DashboardLayout)/components/dashboard/TheMyContacts";
import ActivityTimeline from "@/app/(DashboardLayout)/components/dashboard/TheActivityTimeline";
const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Blogcard />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ProfileCard />
              </Grid>
              <Grid item xs={12}>
                <MyContacts />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={8}>
            <ActivityTimeline />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
