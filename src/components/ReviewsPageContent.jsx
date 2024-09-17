import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const ReviewsPageContent = ({ reviews }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Review ID</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell>{review.id}</TableCell>
              <TableCell>{review.customerName}</TableCell>
              <TableCell>{review.rating}</TableCell>
              <TableCell>{review.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReviewsPageContent;
