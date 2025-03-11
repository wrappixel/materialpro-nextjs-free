'use client';
import Grid from "@mui/material/Grid2";
import ProductPerfomance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";


const Tables = () => {
  return (
    (

      <Grid container spacing={0}>
        <Grid
          size={{
            xs: 12,
            lg: 12
          }}>
          <ProductPerfomance />
        </Grid>
      </Grid>

    )
  );
};

export default Tables;