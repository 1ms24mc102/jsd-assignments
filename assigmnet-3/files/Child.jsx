import React from "react";

function Child({ sendData }) {
  return (
    <div>
      <button onClick={() => sendData("Hello from Child Component!")}>
        Send Data to Parent
      </button>
    </div>
  );
}

export default Child;
