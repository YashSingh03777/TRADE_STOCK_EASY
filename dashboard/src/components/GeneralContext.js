import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openActionWindow: (uid, type) => {},
  closeActionWindow: () => {},
  actionType: "",
});

export const GeneralContextProvider = (props) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [actionType, setActionType] = useState("");
  const [orderMessage, setOrderMessage] = useState("");

  const handleOpenActionWindow = (uid, type) => {
    setIsWindowOpen(true);
    setSelectedStockUID(uid);
    setActionType(type);
    setOrderMessage("");
  };

  const handleCloseActionWindow = () => {
    setIsWindowOpen(false);
    setSelectedStockUID("");
    setActionType("");
    setOrderMessage("✅ Your order is done!");
  };

  return (
    <GeneralContext.Provider
      value={{
        openActionWindow: handleOpenActionWindow,
        closeActionWindow: handleCloseActionWindow,
        actionType,
      }}
    >
      {props.children}

      {isWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          type={actionType}
          onClose={handleCloseActionWindow}
        />
      )}

      {orderMessage && (
        <div style={{ textAlign: "center", marginTop: "1rem", color: "green" }}>
          {orderMessage}
        </div>
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
