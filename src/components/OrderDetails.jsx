import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const OrderDetails = ({ order }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">Order ID: {order.id}</Typography>
        <Typography variant="h6">Chat: {order.chat}</Typography>
        <Typography variant="h6">Payment: {order.payment}</Typography>
        <Typography variant="h6">Delivery Status: {order.deliveryStatus}</Typography>
        <Typography variant="h6">Review: {order.review}</Typography>
      </CardContent>
    </Card>
  );
};

export default OrderDetails;
