import React from "react";
import Dashboard from "./Dashboard";
import Expenses from "./Expenses";

function MainPage({ selectedMenu }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {selectedMenu !== "Dashboard" ? <Expenses /> : <Dashboard />}
    </div>
  );
}

export default MainPage;
