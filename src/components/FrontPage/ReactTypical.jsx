import React from "react";
import Typical from "react-typical";
const ReactTypical = () => {
  return (
    <div>
      <h4>
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
      </h4>
    </div>
  );
};

export default ReactTypical;
