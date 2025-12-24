import React, { useState } from "react";
import "./style.css";

const StateExample = () => {
  const [time, setTime] = useState("Set Time :)");
  const [no, setNo] = useState(0);

  const changeTime = (data) => {
    // console.log(data);
    setTime(data);
  };

  const changeNo = (data) => {
    setNo(no + data)
  }

  return (
    <div>
      <h1>{time}</h1>
      <button className="btn" onClick={() => changeTime("Good Morning")}>
        Good Morning
      </button>
      <button className="btn" onClick={() => changeTime("Good Afternoon")}>
        Good Afternoon
      </button>
      <button className="btn" onClick={() => changeTime("Good Evening")}>
        Good Evening
      </button>
      <button className="btn" onClick={() => changeTime("Good Night")}>
        Good Night
      </button>
      <br />
      <br />
      <h1>{no}</h1>
      <button className="btn" onClick={() => changeNo(1)}>
        +1
      </button>
      <button className="btn" onClick={() => changeNo(-1)}>
        -1
      </button>
      <button className="btn" onClick={() => changeNo(5)}>
        +5
      </button>
      <button className="btn" onClick={() => changeNo(-5)}>
        -5
      </button>
    </div>
  );
};

export default StateExample;
