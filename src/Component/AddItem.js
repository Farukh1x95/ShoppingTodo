import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Container,
  makeStyles,
  MenuItem,
  Select,
  Box
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
    if (addItem !== "") {
      addNewList(addList);
      setAddList("");
    }
  };

  return (
    <Container
      component="div"
      maxWidth="md"
      direction="row"
      justify="space-around"
    >
      <Box className={classes.paper} component="main" maxWidth="md">
        <TextField
          label="Add List"
          type="text"
          name="addlsitmain"
          margin="normal"
          variant="outlined"
          required
          md={12}
          sm={12}
          xs={12}
          value={addList}
          onChange={e => setAddList(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleClickList}>
          Add New List
        </Button>
      </Box>
      <Box className={classes.paper} maxWidth="md">
        <Box className={classes.directionRow}>
          <Select
            label="List"
            type="text"
            name="List"
            variant="outlined"
            sm={12}
            xs={12}
            md={6}
            required
            className={classes.formControl}
            value={list}
            onChange={e => handleList(e)}
          >
            {ListTitles.map(cur => (
              <MenuItem key={cur} value={cur}>
                {cur}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="List"
            type="text"
            name="list"
            margin="normal"
            variant="outlined"
            sm={12}
            xs={12}
            md={6}
            required
            value={addItem}
            onChange={e => setAddItem(e.target.value)}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color={updateValue === "" ? "primary" : "secondary"}
          className={classes.submit}
          onClick={handleClick}
        >
          {updateValue === "" ? "Add Item" : "Update Item"}
        </Button>
      </Box>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  // form: {
  //   marginTop: theme.spacing(1)
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "50%"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  directionRow: {
    display: "flex",
    flexDirection: "row"
  }
}));

export default AddItem;
