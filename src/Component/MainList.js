import React, { useState, Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  makeStyles,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const AllList = ({
  listItem,
  deleteItem,
  deleteList,
  handleUpdateValue,
  handleUpdateList
}) => {
  const { title, subitem } = listItem;
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDelete = (title, index) => {
    deleteItem(title, index);
  };
  const handleDeleteMain = (title, index) => {
    deleteList(title, index);
  };

  const updateItem = (listTitle, value, index) => {
    handleUpdateList(listTitle);
    handleUpdateValue(value);
    handleDelete(listTitle, index);
  };

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
        <IconButton
          xs={4}
          aria-label="delete"
          className={classes.DeleteIcon}
          onClick={() => handleDeleteMain(title)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subitem.map(
            (subtask, index) =>
              subtask !== "" && (
                <ListItem key={index} className={classes.nested}>
                  <ListItemText primary={subtask} />
                  <IconButton
                    xs={4}
                    aria-label="edit"
                    onClick={() => updateItem(title, subtask, index)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    xs={4}
                    aria-label="delete"
                    className={classes.DeleteIcon}
                    onClick={() => handleDelete(title, index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              )
          )}
        </List>
      </Collapse>
    </Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  DeleteIcon: {
    color: "red"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default AllList;
