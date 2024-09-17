import React, { useState } from 'react';
import OrdersList from '../components/OrdersList';

// Mock data
const mockOrders = [
  { id: '1', date: '2024-07-31', name: 'John Doe', location: '123 Elm St', status: 'Pending' },
  // Add more mock orders
];

const OrdersPage = () => {
  const [orders, setOrders] = useState(mockOrders);

  const handleAccept = (orderId) => {
    // Handle accept order
  };

  const handleReject = (orderId) => {
    // Handle reject order
  };

  return <OrdersList orders={orders} onAccept={handleAccept} onReject={handleReject} />;
};

export default OrdersPage;
