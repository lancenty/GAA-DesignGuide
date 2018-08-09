import React from 'react';

const SwatchContainer = (props) => {
  return (
    <ul className="colors-container">
      {props.children}
    </ul>
  )
}

export default SwatchContainer;
