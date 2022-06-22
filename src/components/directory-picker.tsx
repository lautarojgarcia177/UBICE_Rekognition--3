import React, { useEffect } from "react";

export default function DirectoryPicker() {
  function handleChange(event) {
    let files = event.target.files;
    console.log("directory input on change", files);
  }
  return (
    <React.Fragment>
      <input
        directory=""
        webkitdirectory=""
        type="file"
        onChange={handleChange}
      />
    </React.Fragment>
  );
}
