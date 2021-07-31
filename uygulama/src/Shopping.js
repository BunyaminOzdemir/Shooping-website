import React from "react";
import ShoppingItem from "./ShoppingItem";

const Shopping = ({ Todoss, setTodoss, InputText, setInputText }) => {
  return (
    <div className="w-100">
      <ol className="list-group p-2 list-unstyled">
        <h2 className="mt-2">Shopping Cart</h2>

        {Todoss?.map((todo) => (
          <ShoppingItem
            id={todo.id}
            key={todo.id}
            setTodoss={setTodoss}
            todo={todo}
            Todoss={Todoss}
            InputText={InputText}
            setInputText={setInputText}
          />
        ))}
      </ol>
    </div>
  );
};

export default Shopping;
