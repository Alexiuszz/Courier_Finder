import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import BeatLoader from "react-spinners/BeatLoader";

const override = {
  display: "block",
  margin: "138px auto",
  borderColor: "#2c3a6b",
};

function Loader({ color, loading }) {
  return (
    <DialogOverlay
      style={{ zIndex: 2, background: "#545a735f" }}
      isOpen={loading}
      onDismiss={(f) => f}
    >
      <DialogContent
        style={{
          height: "80vh",
          width: "80vw",
          background: "none",
          marginLeft: '40vw'
        }}
      >
        <BeatLoader
          color={'#2c3a6b'}
          loading={loading}
          cssOverride={override}
          size={15}
          speedMultiplier={0.7}
        />
      </DialogContent>
    </DialogOverlay>
  );
}

export default Loader;
