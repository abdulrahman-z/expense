import React from "react";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { connect } from "react-redux";
import { newItem } from "../redux/actions";

const ExpenseForm = (props) => {
  const { addItem } = props;
  return (
    <div style={{ marginTop: "32px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 500,
          height: 500,
          backgroundColor: "#dad7cd",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#dad7cd",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Formik
          initialValues={{ category: "", amount: "", date: null }}
          validate={(values) => {
            const errors = {};
            if (!values.category) {
              errors.category = "Required";
            }
            if (!values.amount) {
              errors.amount = "Required";
            } else if (values.amount <= 0) {
              errors.amount = "amount value should be greter than 0";
            }
            if (
              values.date === "" ||
              values.date === null ||
              values.date === "select date"
            ) {
              errors.date = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm, setFieldValue }) => {
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
              setFieldValue("date", "");
              addItem(values);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
            dirty,
            setFieldValue,
            resetForm,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <TextField
                id="standard-basic"
                label="Category"
                variant="standard"
                type="text"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                fullWidth
              />
              {errors.category && touched.category && errors.category}
              <TextField
                id="standard-basic"
                label="Amount"
                variant="standard"
                type="number"
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount}
                fullWidth
              />
              {errors.amount && touched.amount && errors.amount}
              <div style={{ marginTop: "24px" }}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    style={{ marginTop: "16px" }}
                    label="Select date"
                    value={values.date}
                    onChange={(date) =>
                      setFieldValue("date", moment(date).format("DD/MM/YYYY"))
                    }
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              {errors.date && touched.date && errors.date}
              <Button
                type="submit"
                disabled={!(isValid && dirty)}
                variant="outlined"
                style={{ marginTop: "32px" }}
              >
                ADD
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (data) => dispatch(newItem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
