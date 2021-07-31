import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Shopping from "./Shopping";

function Contact() {
  const [InputText, setInputText] = useState("");
  const [Todos, setTodos] = useState([]);
  const [Todoss, setTodoss] = useState([]);
  useEffect(() => {
    const getShoppingListFromServer = async () => {
      const response = await fetch("http://localhost:3000/shoppingList");
      const data = await response.json();
      console.log(data);
      setTodos(data);
    };
    getShoppingListFromServer();
  }, []);

  return (
    <div>
      <Form
        InputText={InputText}
        Todos={Todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <div className="container d-flex flex-wrap ">
        <List
          Todos={Todos}
          setTodos={setTodos}
          Todoss={Todoss}
          setTodoss={setTodoss}
          InputText={InputText}
          setInputText={setInputText}
        />
        <Shopping
          Todoss={Todoss}
          setTodoss={setTodoss}
          InputText={InputText}
          setInputText={setInputText}
        />
      </div>
    </div>
  );
}
export default Contact;
