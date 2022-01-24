import React from "react";
import Card from "./components/Card";
import AddList from "./components/AddList";
import CardContainer from "./components/CardContainer";
import "./app.css";
import Data from "./data.json";
import Navbar from "./components/Navbar/Navbar";

const emptList = {
  id: parseInt(Math.random() * 1000),
  title: "New List",
  cards: [],
};

function App() {
  console.log(Data);
  const [lists, setLists] = React.useState(Data.columns);

  const addList = () => setLists([...lists, emptList]);

  return (
    <div className="App">
      <Navbar />
      <div className="d-flex overflow-auto p-3">
        {lists.map((list) => (
          <CardContainer key={list.id} list={list} />
        ))}

        <AddList onClick={addList} />
      </div>
    </div>
  );
}

export default App;
