import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Container,
  makeStyles,
  MenuItem,
  Select,
  Grid
} from "@material-ui/core";

const AddItem = ({
  addNewList,
  addNewItem,
  ListTitles,
  updateValue,
  updateList,
  setUpdateList,
  setUpdateValue
}) => {
  const classes = useStyles();
  const [addList, setAddList] = useState("");
  const [addItem, setAddItem] = useState("");
  const [list, setList] = useState("");

  useEffect(() => {
    setAddItem(updateValue);
    setList(updateList);
  }, [addNewList, updateValue, updateList]);

  const handleList = e => {
    setList(e.target.value);
  };

  const handleClick = () => {
    if (addItem !== "") {
      addNewItem(list, addItem);
      setAddItem("");
      setList("");
      setUpdateList("");
      setUpdateValue("");
    }
  };

  const handleClickList = () => {
    // console.log("add NEw Lsit", addNewList);
    addNewList(addList);
    setAddList("");
  };

  return (
    <Container className={classes.paper} component="div" maxWidth="md">
      <Grid item md={6}>
        <TextField
          label="Add List"
          type="text"
          name="addlsitmain"
          margin="normal"
          variant="outlined"
          md={12}
          sm={12}
          xs={12}
          value={addList}
          onChange={e => setAddList(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleClickList}>
          Add New LIST
        </Button>
      </Grid>
      <Grid item md={6}>
        <div className={classes.form} noValidate>
          <Select
            label="List"
            type="text"
            name="List"
            variant="outlined"
            md={6}
            sm={12}
            xs={12}
            className={classes.formControl}
            value={list}
            onChange={e => handleList(e)}
          >
            {ListTitles.map(cur => (
              <MenuItem value={cur}>{cur}</MenuItem>
            ))}
          </Select>

          <TextField
            label="List"
            type="text"
            name="list"
            margin="normal"
            variant="outlined"
            md={6}
            sm={12}
            xs={12}
            value={addItem}
            onChange={e => setAddItem(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            {updateValue === "" ? "Add Item" : "Update Item"}
          </Button>
        </div>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  form: {
    marginTop: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "35%"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default AddItem;
