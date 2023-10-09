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
  
  const autoRotate = () => {
    const newValue = (value + 1) % props.dish.dishes.length;
    setValue(newValue);
  };

  // Start auto-rotation when the component mounts
  React.useEffect(() => {
    const interval = setInterval(autoRotate, 3000); // Rotate every 3 seconds (adjust as needed)

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [value]); // Depend on 'value' to reset the interval when the user manually changes tabs
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