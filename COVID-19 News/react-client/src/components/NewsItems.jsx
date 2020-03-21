import React from 'react';


//this is going to be a single news article that users see, pick between this and Article comp.
const NewsItems = (props) => (

  <div>
    { props.item.description }
  </div>
)

export default NewsItems;