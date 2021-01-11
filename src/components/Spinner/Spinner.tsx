import React from "react";

const Spinner = () => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        display: "flex",
        width: "150px",
        height: "150px",
      }}
      className={`my-5 spinner-border text-warning`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
