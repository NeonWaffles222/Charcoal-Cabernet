import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs({ onTabChange }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(newValue); 
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All Dishes" />
        <Tab label="Appetizers" />
        <Tab label="Salads" />
        <Tab label="Soups" />
        <Tab label="Side Dishes" />
        <Tab label="Sandwiches" />
        <Tab label="Meats" />
        <Tab label="Seafood" />
        <Tab label="Desserts" />
        <Tab label="Bevereges" />
      </Tabs>
    </Box>
  );
}