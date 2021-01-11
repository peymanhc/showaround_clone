import React from "react";

function Btns(props: any): React.ReactElement {
  return (
    <div className="mt-3">
      <button onClick={props.clicked} type="submit" className="btn btn-primary">
        Save
      </button>
      <button type="submit" className="btn text-primary">
        Cancel
      </button>
    </div>
  );
}

export default Btns;
