import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function DishScroll(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Define a CSS class for the images
  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  };

  return (
    <Box
      sx={{
        maxWidth: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {props.dish.dishes.map((item) => (
          <Tab
            key={item.id}
            label={
              <img
                src={item.image_url}
                alt={item.name}
                style={imgStyle} />} />
        ))}
      </Tabs>
    </Box>
  );
}