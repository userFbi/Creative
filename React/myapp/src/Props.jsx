import React from "react";

const Props = ({ data }) => {
  return (
    data.map((i, index) => (
    <div>
      <img src={i.image} alt="img" />
      <h1>{i.name}</h1>
    </div>
    )
  ))
};

export default Props;
