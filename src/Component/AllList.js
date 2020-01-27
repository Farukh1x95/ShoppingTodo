import React, { useState, useEffect } from "react";
import { List } from "@material-ui/core";
import MainList from "./MainList";
import { Grid, CssBaseline, makeStyles, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddItem from "./AddItem";

const AllList = () => {
  const classes = useStyles();
  //  State
  const [allItems, setAllItems] = useState([]);
  const [ListTitles, setListTitles] = useState([]);

  // Add NEw List
  const addNewList = async AddList => {
    // console.log("AddNewList", AddList);
    // await allItems.title.push(AddList);
    const newList = { title: AddList, subitem: [] };
    console.log("newList", newList);
    setAllItems([...allItems, newList]);
    setListTitles([...ListTitles, newList.title]);
    localStorage.setItem(newList.title, newList.subitem);
  };
  // Delete List
  const deleteList = async listTitle => {
    let arr = allItems;
    for (let i = 0; i < allItems.length; i++) {
      let key = allItems[i].title;
      if (key === listTitle) {
        arr.splice(i, 1);
      }
    }

    setListTitles([...ListTitles.filter(cur => cur !== listTitle)]);
    await setAllItems([...arr]);
    localStorage.removeItem(listTitle);
  };

  const [updateValue, setUpdateValue] = useState("");
  const [updateList, setUpdateList] = useState("");

  const handleUpdateValue = value => {
    setUpdateValue(value);
  };

  const handleUpdateList = list => {
    setUpdateList(list);
  };

  const syncState = async () => {
    let value = [];
    let titleList = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      let obj = {
        title: keys[i],
        subitem: localStorage.getItem(keys[i]).split(",")
      };
      value.push(obj);
      titleList.push(keys[i]);
    }
    console.log("something", value[0]);
    await setAllItems(value);
    await setListTitles(titleList);
  };

  useEffect(() => {
    syncState();
  }, []);

  const addNewItem = async (listTitle, AddItem) => {
    for (let i = 0; i < allItems.length; i++) {
      let keysub = allItems[i].title;
      if (keysub === listTitle) {
        let arr = [...allItems];
        arr[i].subitem.push(AddItem);
        await setAllItems(arr);
        localStorage.setItem(listTitle, [...arr[i].subitem]);
      }
    }
  };

  const deleteItem = (listTitle, index) => {
    for (let i = 0; i < allItems.length; i++) {
      let key = allItems[i].title;
      if (key === listTitle) {
        let arr = allItems;
        arr[i].subitem = allItems[i].subitem.filter(
          (cur, ind) => ind !== index
        );
        setAllItems([...arr]);
        localStorage.setItem(listTitle, [...arr[i].subitem]);
      }
    }
  };

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={6}>
        <AddItem
          addNewList={addNewList}
          addNewItem={addNewItem}
          ListTitles={ListTitles}
          updateValue={updateValue}
          updateList={updateList}
          setUpdateValue={setUpdateValue}
          setUpdateList={setUpdateList}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <List component="div">
          {allItems.map(listItem => (
            <MainList
              key={listItem.title}
              listItem={listItem}
              deleteItem={deleteItem}
              deleteList={deleteList}
              handleUpdateValue={handleUpdateValue}
              handleUpdateList={handleUpdateList}
            />
          ))}
        </List>
      </Grid>
      <Button
        variant="fab"
        color="primary"
        aria-label="Add List"
        className={classes.floatbutton}
      >
        <AddIcon />
      </Button>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  floatbutton: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export default AllList;
