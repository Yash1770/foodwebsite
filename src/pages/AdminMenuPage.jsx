import React, { useState, useEffect } from 'react';
import { Card, CardContent, Container, Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddMenuItem from '../components/AddMenuItem';

const AdminMenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Load menu items from local storage on component mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    setMenuItems(storedItems);
  }, []);

  // Save menu items to local storage
  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  // Handle adding a new menu item
  const handleAddItem = (item) => {
    const updatedItems = [...menuItems, item];
    setMenuItems(updatedItems);
  };

  // Handle opening the confirmation dialog
  const handleClickOpen = (index) => {
    setItemToDelete(index);
    setOpen(true);
  };

  // Handle closing the confirmation dialog
  const handleClose = () => {
    setOpen(false);
    setItemToDelete(null);
  };

  // Handle confirming the deletion of an item
  const handleConfirmDelete = () => {
    if (itemToDelete !== null) {
      const updatedItems = menuItems.filter((_, i) => i !== itemToDelete);
      setMenuItems(updatedItems);
    }
    handleClose();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Menu Management
      </Typography>
      <AddMenuItem onAddItem={handleAddItem} />
      <Typography variant="h6" gutterBottom>
        Current Menu Items
      </Typography>
      <Grid container spacing={3}>
        {menuItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined" style={{ position: 'relative' }}>
              <CardContent>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: 'auto' }}
                  />
                )}
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="subtitle1">${item.price}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.category}
                </Typography>
                {/* Remove Button */}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleClickOpen(index)}
                  style={{ position: 'absolute', bottom: 10, right: 10 }}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this item?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminMenuPage;
