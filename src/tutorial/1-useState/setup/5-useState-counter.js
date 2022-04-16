import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2> regular counter</h2>
        <h1> {value}</h1>
        {/* ex. using inline functions */}
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        {/* ex. calling outside function */}
        <button className="btn" onClick={reset}>
          reset
        </button>
        {/* ex. using inline functions */}
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
    </>
  );
};
export default UseStateCounter;
