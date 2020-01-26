import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  makeStyles,
  MenuItem,
  Select
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
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

  const handleList = e => {
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
        <TextField
          label="Name"
          type="text"
          name="name"
          margin="normal"
          variant="outlined"
          required
          value={addItem}
          onChange={e => setAddItem(e.target.value)}
        />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={list}
          onChange={e => handleList(e)}
        >
          {ListTitles.map(cur => (
            <MenuItem value={cur}>{cur}</MenuItem>
          ))}
        </Select>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleClick}
        >
          Add Item
        </Button>
      </div>
    </Container>
  );
};

export default AddItem;
