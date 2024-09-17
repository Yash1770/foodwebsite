import React from 'react';
import { useParams } from 'react-router-dom';
import OrderDetails from '../components/OrderDetails';

// Mock data
const mockOrder = {
  id: '1',
  chat: 'Customer requested extra cheese.',
  payment: 'Successful',
  deliveryStatus: 'Delivered',
  review: 'Great service!',
};

const OrderDetailsPage = () => {
  const { id } = useParams();
  
  // Fetch or filter order based on id
  // For now, using mock data
  return <OrderDetails order={mockOrder} />;
};

export default OrderDetailsPage;
