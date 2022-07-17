import React from 'react';

type ButtonProps ={
    handleClick: ()=> void 
}
const Event = (props:ButtonProps) => {
  return (
      <button onClick={props.handleClick}>Click Me </button>
  )
}

export default Event
