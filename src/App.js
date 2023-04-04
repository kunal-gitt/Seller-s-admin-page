import React, { useState } from "react";
import "./App.css";

import Product from "./Components/Products";

function App() {
  const [enteredproductid, setProductId] = useState();
  const [enteredsellingprice, setSellingPrice] = useState();
  const [enteredproductname, setProductName] = useState();

  const [entereddata, setentereddata] = useState([]);

  const [enteredtotal, setenteredtotal] = useState(0);

  const arr = [];

  const onsubmithandler = (e) => {
    e.preventDefault();

    const productdata = {
      ProductId: enteredproductid,
      SellingPrice: enteredsellingprice,
      ProductName: enteredproductname,
    };
    setenteredtotal((prev) => {
      return prev + Number(enteredsellingprice);
    });
    const newproduct = (
      <Product
        value={enteredproductid}
        value1={enteredsellingprice}
        value2={enteredproductname}
        value3={setentereddata}
        value4={setenteredtotal}
      ></Product>
    );
    arr.push(newproduct);

    console.log(arr);

    setentereddata((prev) => {
      return [...prev, ...arr];
    });
    console.log(productdata);

    localStorage.setItem(enteredproductid, JSON.stringify(productdata));

    setProductId("");
    setSellingPrice("");
    setProductName("");
  };

  const productIdHandler = (e) => {
    setProductId(e.target.value);
  };

  const sellingchangehandler = (e) => {
    setSellingPrice(e.target.value);
  };

  const productNameHandler = (e) => {
    setProductName(e.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={onsubmithandler}>
        <label htmlFor="product_id">Product ID:</label>
        <input
          id="product_id"
          type="number"
          value={enteredproductid}
          onChange={productIdHandler}
        />
        <label htmlFor="selling_price">Selling Price:</label>
        <input
          id="Selling_price"
          type="number"
          value={enteredsellingprice}
          onChange={sellingchangehandler}
        />
        <label htmlFor="product_name">Product Name:</label>
        <input
          id="product_name"
          label="Product Name:"
          type="text"
          value={enteredproductname}
          onChange={productNameHandler}
        />

        <button type="submit">Add Product</button>
      </form>
      <h2>Products</h2>
      {entereddata};<h1>Total value worth of products: Rs {enteredtotal}</h1>
    </React.Fragment>
  );
}

export default App;
