import React from "react";
import Typical from "react-typical";
const ReactTypical = () => {
  return (
    <div>
      <h5 style={{
        marginTop:'0px',
        marginBottom:'20px',
        fontSize: '40px',
      }}>
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Where opportunities meet possibilities.",
            1000,
            "Your one-stop career destination.",
            1000,
            "Discover a world of opportunities.",
            1000,
            "Taking careers to the next level.",
            1000,
          ]}
        ></Typical>
      </h5>
    </div>
  );
};

export default ReactTypical;
