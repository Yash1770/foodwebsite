import { Card, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledCard = styled(Card)({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#f5f5f5',
});

const Dashboard = () => {
  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <StyledCard variant="outlined">
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h4">1234</Typography>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard variant="outlined">
            <Typography variant="h6">Total Revenue</Typography>
            <Typography variant="h4">$12,345</Typography>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard variant="outlined">
            <Typography variant="h6">Total Customers</Typography>
            <Typography variant="h4">567</Typography>
          </StyledCard>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Dashboard;
