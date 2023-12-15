import React from 'react'

export default function Counter(props) {
const handleClick = () => {
    console.log("click");
};



  return (
    <div>
        <button onClick={handleClick}>Click Me!</button>
        {props.childe}
        {props.name} - {props.age}
    </div>
  )
}
