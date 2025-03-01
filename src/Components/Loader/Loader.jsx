import { flexbox } from "@mui/system";
import React from "react";
import { HashLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <HashLoader />
    </div>
  );
}

export default Loader;
