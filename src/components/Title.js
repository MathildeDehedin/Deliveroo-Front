import React from "react";
const Title = ({ data }) => {
  return (
    <div className="title">
      <div className="title-1">
        <h1>{data.name}</h1>
        <h2>{data.description}</h2>
      </div>
      <img className="title-2" src={data.picture} alt={data.name} />
    </div>
  );
};
export default Title;
