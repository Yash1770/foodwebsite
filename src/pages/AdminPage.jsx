import { Box, Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';

import CustomerDetailsPage from './CustomerDetailsPage';
import DashboardPage from './DashboardPage';
import OrderDetailsPage from './OrderDetailsPage';
import OrdersPage from './OrdersPage';
import ReviewsPage from './ReviewsPage';
import AdminMenuPage from './AdminMenuPage';

function Adminpage() {
  const [currentPage, setCurrentPage] = useState('dashboard'); // State to track current page

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'orders':
        return <OrdersPage />;
      case 'orderDetails':
        return <OrderDetailsPage />;
      case 'customers':
        return <CustomerDetailsPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'menu':
        return <AdminMenuPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
     
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ButtonGroup variant="contained">
          <Button onClick={() => setCurrentPage('dashboard')}>Dashboard</Button>
          <Button onClick={() => setCurrentPage('orders')}>Orders</Button>
          <Button onClick={() => setCurrentPage('customers')}>Customers</Button>
          <Button onClick={() => setCurrentPage('reviews')}>Reviews</Button>
          <Button onClick={() => setCurrentPage('menu')}>Menu</Button>
        </ButtonGroup>
        {renderPage()}
      </Box>
    </Box>
  );
}

export default Adminpage;
