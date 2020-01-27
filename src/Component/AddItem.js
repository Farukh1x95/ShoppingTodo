import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Container,
  makeStyles,
  MenuItem,
  Select,
  Box,
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
    addNewItem(list, addItem);
    setAddItem("");
    setList("");
    setUpdateList("");
    setUpdateValue("");
  };

  const handleClickList = () => {
    addNewList(addList);
    setAddList("");
  };

  return (
    <Container
      component="div"
      maxWidth="md"
      direction="row"
      justify="space-around"
      className={classes.paper}
    >
      <Grid item md={6} className={classes.directionColumn} component="div">
        <TextField
          label="Add List"
          type="text"
          name="addlsitmain"
          margin="normal"
          variant="outlined"
          required
          autoFocus
          value={addList}
          onChange={e => setAddList(e.target.value)}
        />
        {addList && (
          <Button variant="contained" color="primary" onClick={handleClickList}>
            Add New List
          </Button>
        )}
      </Grid>
      <Grid item md={6}>
        <Box className={classes.directionColumn}>
          <Select
            label="List"
            type="text"
            name="List"
            variant="outlined"
            required
            autoFocus
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
            required
            value={addItem}
            onChange={e => setAddItem(e.target.value)}
          />
        </Box>
        {addItem && (
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color={updateValue === "" ? "primary" : "secondary"}
            className={classes.submit}
            onClick={handleClick}
          >
            {updateValue === "" ? "Add Item" : "Update Item"}
          </Button>
        )}
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
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
  directionColumn: {
    display: "flex",
    flexDirection: "column",
    margin: "10px"
  }
}));

export default AddItem;
