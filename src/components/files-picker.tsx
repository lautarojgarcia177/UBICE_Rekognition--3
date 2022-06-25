import React from "react";

export default function FilesPicker(props) {
  return (
    <React.Fragment>
      <input
        type="file"
        multiple
        onChange={props.changeHandler}
      />
    </React.Fragment>
  );
}
