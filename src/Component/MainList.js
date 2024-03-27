import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment, useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    alignItems: "center"
    // backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: "32px"
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

  // const updateItem = (listTitle, index) => {};

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subitem.map((subtask, index) => (
            <ListItem key={index} onClick={() => handleDelete(title, index)} className={classes.nested}>
              <span onClick={() => {}}>Update</span>
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
