import React from 'react';
import ReviewsPageContent from '../components/ReviewsPageContent'; // Renamed component

// Mock data
const mockReviews = [
  { id: '1', customerName: 'Alice Brown', rating: 5, comment: 'Excellent food and service!' },
  { id: '2', customerName: 'David Wilson', rating: 4, comment: 'Good, but delivery was late.' },
  // Add more mock reviews as needed
];

const ReviewsPage = () => {
  return <ReviewsPageContent reviews={mockReviews} />;
};

export default ReviewsPage;
