import { Button } from "@mui/material";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import List from "./List";
import { connect } from "react-redux";

function Expenses(props) {
  const [addItem, setAddItem] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>Expenses page</div>
      <div style={{ padding: "24px 0" }}>
        <Button
          variant="contained"
          style={{ fontSize: "24px", padding: "0 24px" }}
          onClick={() => setAddItem(!addItem)}
        >
          {addItem ? "X" : "+"}
        </Button>
      </div>
      {addItem ? <ExpenseForm /> : null}
      <List rows={props.list.rows} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.data,
  };
};

export default connect(mapStateToProps)(Expenses);
