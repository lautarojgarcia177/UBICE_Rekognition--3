import React, { useEffect } from "react";

export default function DirectoryPicker(props) {
  return (
    <React.Fragment>
      <input
        directory=""
        webkitdirectory=""
        type="file"
        onChange={props.changeHandler}
      />
    </React.Fragment>
  );
}
