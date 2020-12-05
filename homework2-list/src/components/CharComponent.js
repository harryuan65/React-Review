import React from "react";

const CharComponent = (props) => {
  let { char, color } = props;
  return (
    <div
      style={{
        display: "inline-block",
        padding: "16px",
        width: '40px',
        height: '40px',
        textAlign: "center",
        margin: "8px",
        border: "1px solid #5b5b5b88",
        borderRadius: "7px",
        backgroundColor: color ? `${color}11` : "transparent",
        color: color || "black",
        fontSize: "30px",
        cursor: "pointer"
      }}
      onClick={props.deleteChar}
    >{char}</div>
  );
};

export default CharComponent;
