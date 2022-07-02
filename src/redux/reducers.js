const rows = [
  { category: "Shopping", date: "01/07/2022", amount: "5000" },
  { category: "Entertainment", date: "02/07/2022", amount: "2000" },
  { category: "Bills", date: "10/06/2022", amount: "15000" },
  { category: "Food", date: "05/06/2022", amount: "3000" },
  { category: "Fitness", date: "29/06/2022", amount: "5000" },
  { category: "fuel", date: "01/07/2022", amount: "500" },
];

const initialState = {
  rows: rows,
};

export const listData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        rows: [...rows, action.payload],
      };
    default:
      return state;
  }
};
