import { Button, Container, MenuItem, Select, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    marginTop: "8px"
  },
  submit: {
    margin: "24px 0px 16px"
  }
}));

const AddItem = ({ addNewItem, ListTitles }) => {
  const classes = useStyles();
  const [addItem, setAddItem] = useState("");
  const [list, setList] = useState("");

  // const onSubmit = e => {
  //   e.preventDefault();
  //   console.log(addItem);
  //   addNewItem(addItem);
  //   setAddItem("");
  // };

  const handleList = (e) => {
    setList(e.target.value);
  };

  const handleClick = () => {
    addNewItem(list, addItem);
    setAddItem("");
    setList("");
  };

  return (
    <Container className={classes.paper} component="div" maxWidth="xs">
      <div className={classes.form} noValidate>
        <TextField label="Name" type="text" name="name" margin="normal" variant="outlined" required value={addItem} onChange={(e) => setAddItem(e.target.value)} />

        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={list} onChange={(e) => handleList(e)}>
          {ListTitles.map((cur, index) => (
            <MenuItem key={index} value={cur}>
              {cur}
            </MenuItem>
          ))}
        </Select>

        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleClick}>
          Add Item
        </Button>
      </div>
    </Container>
  );
};

export default AddItem;
