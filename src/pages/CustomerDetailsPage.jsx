import React from 'react';
import CustomerDetails from '../components/CustomerDetails';

// Mock data
const mockCustomers = [
  { id: '1', name: 'Jane Smith', totalSpent: 200 },
  { id: '2', name: 'Bob Johnson', totalSpent: 450 },
  // Add more mock customers as needed
];

const CustomerDetailsPage = () => {
  return <CustomerDetails customers={mockCustomers} />;
};

export default CustomerDetailsPage;
