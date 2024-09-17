import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const categories = ['Starter','Breakfast',  'Sandwich/Burger', 'Noodles'];

const AddMenuItem = ({ onAddItem }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    onAddItem({ title, price, category, image });
    setTitle('');
    setPrice('');
    setCategory('');
    setImage(null);
  };

  return (
    <Card variant="outlined" style={{ padding: 20, margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Add New Menu Item</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-image"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="upload-image">
              <Button variant="contained" color="primary" component="span">
                Upload Image
              </Button>
            </label>
          </Grid>
          {image && (
            <Grid item xs={12}>
              <img src={image} alt="Menu Preview" style={{ width: '100%', height: 'auto', marginTop: 10 }} />
            </Grid>
          )}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddMenuItem;
