import React from "react";
import ListItem from "./ListItem";

const List = ({ Todos, setTodos, Todoss, setTodoss, InputText }) => {
  return (
    <div className="w-100">
      <ol className="list-group p-2 list-unstyled">
        <h2 className="text-dark ">Search Results</h2>
        {Todos?.map((todo) => (
          <ListItem
            name={todo.name}
            id={todo.id}
            key={todo.id}
            setTodos={setTodos}
            setTodoss={setTodoss}
            todo={todo}
            Todos={Todos}
            Todoss={Todoss}
            InputText={InputText}
          />
        ))}
      </ol>
    </div>
  );
};
export default List;
