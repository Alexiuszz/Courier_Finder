import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Gmap from "./map_components/Gmap";
import { IconButton } from "./form_components/FormComponents";
import "../styles/mapDialog.css";
import plus from "../Icons/plus.svg";

function MapDialog({
  showDialog,
  close,
  onAddressSelect,
  cAddress,
  addAddress,
}) {
  const mapContainerStyle = {
    width: "70vw",
    height: "350px",
  };
  const [mark, setMark] = React.useState({
    lat: 9.082,
    lng: 8.6753,
  });

  const changeMark = (newMark) => {
    setMark(newMark);
  };

  return (
    <>
      <DialogOverlay
        style={{ zIndex: 2 }}
        isOpen={showDialog}
        onDismiss={() => {
          close();
        }}
      >
        <DialogContent
          style={{
            boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
            height: "400px",
            width: "80vw",
          }}
        >
          <div>
            <Gmap
              mapContainerStyle={mapContainerStyle}
              onAddressSelect={onAddressSelect}
              cAddress={cAddress}
              mark={mark}
              changeMark={changeMark}
            />
          </div>
          <IconButton
            handleSubmit={() => {
              addAddress(mark);
              close();
            }}
            text="Add Address"
            className="mDialogButton"
            icon={plus}
            iconRight
          />
        </DialogContent>
      </DialogOverlay>
    </>
  );
}

export default MapDialog;
