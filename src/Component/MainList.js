import React, { useState, Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  makeStyles
} from "@material-ui/core";
import AddItem from "./AddItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const AllList = ({ listItem, deleteItem }) => {
  const { id, title, subitem } = listItem;
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDelete = (title, index) => {
    deleteItem(title, index);
  };

  const updateItem = (listTitle, index) => {};

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subitem.map((subtask, index) => (
            <ListItem
              key={index}
              button
              onClick={() => handleDelete(title, index)}
              className={classes.nested}
            >
              <span onClick={() => updateItem(title, index)}>Update</span>
              <ListItemText primary={subtask} />
            </ListItem>
          ))}
        </List>
      </Collapse>
      {console.log(id, title, subitem)}
    </Fragment>
  );
};

export default AllList;
