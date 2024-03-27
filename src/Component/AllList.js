import { Container, CssBaseline, Grid, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import MainList from "./MainList";

const AllList = () => {
  const [allItems, setAllItems] = useState([
    {
      id: 1,
      title: "Food",
      subitem: ["Chicken", "Korma", "Roti"]
    },
    {
      id: 2,
      title: "Head list",
      subitem: ["whatt", "uoo", "yeall"]
    },
    {
      id: 3,
      title: "server",
      subitem: ["Test3", "Yooo", "yeahKo"]
    }
  ]);

  const [ListTitles, setListTitles] = useState([]);

  function showTitle() {
    let titleList = [];
    for (let i = 0; i < allItems.length; i++) {
      titleList.push(allItems[i].title);
    }
    setListTitles(titleList);
  }

  useEffect(() => {
    showTitle();
  }, []);

  const addNewItem = (listTitle, AddItem) => {
    for (let i = 0; i < allItems.length; i++) {
      let keysub = allItems[i].title;
      if (keysub === listTitle) {
        let arr = [...allItems];
        console.log(arr);

        arr[i].subitem.push(AddItem);
        setAllItems(arr);
      }
    }
  };

  const deleteItem = (listTitle, index) => {
    for (let i = 0; i < allItems.length; i++) {
      let key = allItems[i].title;
      if (key === listTitle) {
        let arr = allItems;
        arr[i].subitem = allItems[i].subitem.filter((cur, ind) => ind !== index);
        setAllItems([...arr]);
      }
    }
  };

  return (
    <Container>
      <CssBaseline />
      <Grid>
        <AddItem addNewItem={addNewItem} ListTitles={ListTitles} />

        <Grid item md={6}>
          <List component="div">
            {allItems.map((listItem, key) => (
              <MainList key={key} listItem={listItem} deleteItem={deleteItem} />
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "50%",
//     alignItems: "center",
//     backgroundColor: theme.palette.background.paper
//   },
//   nested: {
//     paddingLeft: theme.spacing(4)
//   }
// }));

export default AllList;
