import React, { useState } from "react";

function App() {
  const [timeCount, setTime] = useState("00:00:00");

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{timeCount}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
