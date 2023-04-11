import React, { useState, useEffect } from 'react';

const Clock = (props) => {

  const [date, setDate] = useState(new Date());
//const [textInput, setTextInput] = useState(React.createRef);

  

  useEffect(() => {
    setInterval(() => tick(), 1000)
  }, [])

  const tick = () => {
    setDate(new Date())
  }

  return(
    <div>
      <h1>Hello World</h1>
      <h2>It is {date.toLocaleString()}</h2>
      
    </div>
  )
}

export default Clock;

