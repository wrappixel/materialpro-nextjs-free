import React from 'react';
import { Typography } from '@mui/material';

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const SamplePage = () => {
    return (


        <DashboardCard title="Sample Page">
            <Typography>This is a sample page</Typography>
        </DashboardCard>

    );
};

export default SamplePage;
