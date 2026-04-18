import React, { useState } from "react";
import Child from "./Child";

function App() {
  const [message, setMessage] = useState("");

  const handleDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parent Component</h1>
      <Child sendData={handleDataFromChild} />

      <h3>Message from Child:</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;