import React from "react";
import Button from "react-bootstrap/Button";
const ShoppingItem = ({ Todoss, todo, setTodoss }) => {
  const deleteshopping = () => {
    setTodoss(Todoss.filter((item) => item.id !== todo.id));
  };
  const incCount = () => {
    setTodoss(
      Todoss.map((product) =>
        product.name === todo.name
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  };
  const decCount = () => {
    setTodoss(
      Todoss.map((product) =>
        product.name === todo.name
          ? { ...product, count: product.count - 1}
          : product
      )
    );
  };
  return (
    <li className="container mt-2 d-flex text-dark justify-content-between align-items-center border border-dark">
      <span className="ml-2">{todo.name}</span>
      <div className="row d-flex justify-content-between align-items-center">
        <layer className="mr-5">piece : {todo.count} </layer>
        <Button onClick={incCount} className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </Button>
        <Button onClick={decCount}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </Button>
      </div>
      <Button
        onClick={deleteshopping}
        className="mt-2 mb-2 mr-2 rounded-circle bg-danger border-danger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
        </svg>
      </Button>
    </li>
  );
};

export default ShoppingItem;
