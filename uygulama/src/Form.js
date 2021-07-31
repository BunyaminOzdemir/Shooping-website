import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import "./Form.css";
import TodoImage from "./shop-img.jpg";

const Form = ({ setInputText, InputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const SubmitTodoHandler = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: InputText,
        count: 1,
        completed: false,
        id: InputText + 1,
      }),
    };
    await fetch("http://localhost:3000/shoppingList", requestOptions);
  };
  return (
    // <div
    //   className="col-3 mt-5 bg-dark text-center rounded"
    //   style={{ height: "750px" }}
    // >
    //   {/* <div className="row d-flex flex-column m-4">
    //     <Figure className="figure">
    //       <img className="img-fluid" src={TodoImage} width="384" height="300" />
    //     </Figure>
    //     <h3 className="text-center mt-4 text-light">Özdemir Market</h3>
    //     <input
    //       onChange={inputTextHandler}
    //       type="text"
    //       className="form-control mt-4"
    //       placeholder="What's on your mind..."
    //     />
    //     <Button onClick={SubmitTodoHandler} variant="btn btn-success mt-4">
    //       Ürün Ekle
    //     </Button>
    //   </div>
    // </div> */}

    <Navbar
      className="navbar navbar-expand-sm justify-content-center"
      style={{ background: "#0e101c" }}
    >
      <ul className="navbar-nav d-flex justify-content-between align-items-center">
        <li className="nav-item">
          <a href="" className="navbar-brand">
            <img src={TodoImage} style={{ width: "100px" }} />
          </a>
        </li>
        <li className="nav-item">
          <h3 className="text-center text-light">
            Shopping List Bootstrap App
          </h3>
        </li>
        <li className="nav-item">
          <div className="container d-inline-block">
            <input
              onChange={inputTextHandler}
              type="text"
              className="form-control flex-fill"
              placeholder="What's on your mind..."
            />
          </div>
        </li>
        <li className="nav-item">
          <Button onClick={SubmitTodoHandler} variant="btn btn-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-bag-plus-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
              />
            </svg>
          </Button>
          <Button variant="btn btn-warning ml-3">Basket</Button>
        </li>
      </ul>
    </Navbar>
  );
};
export default Form;
