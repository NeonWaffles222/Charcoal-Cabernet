import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList(props) {
  console.log(props.dish.dishes);

  const itemWidth = 164; // Adjust this value according to your needs

  return (
    <div>
      <ImageList
        sx={{  display: 'flex', flexWrap: 'nowrap' }}
        cols={props.dish.dishes.length}
        rowHeight={164}
      >
        {props.dish.dishes.map((item) => (
          <Tab key={item.id} style={{ flex: `0 0 ${itemWidth}px` }}>
            <img
              srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
              alt={item.name}
              loading="lazy"
            />
            {/* <div>{item.name}</div> */}
          </Tab>
        ))}
      </ImageList>
    </div>
  );
}