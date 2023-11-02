import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoLists from "./components/TodoLists";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText!=='')
    setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div>
      <TodoList addList={addList} />
      <h1 className="app-heading">TO-DO LIST</h1>
      <hr />
      {listTodo.map((listItem, i) => {
        return (
          <TodoLists
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
          />
        );
      })}
    </div>
  );
}

export default App;
