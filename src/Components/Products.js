import React from "react";

const Product = (props) => {
  const ondeleteHandler = () => {
    localStorage.removeItem(props.value);
    props.value4((prev) => {
      return prev - Number(props.value1);
    });
    props.value3((prev) => {
      return prev.filter((val) => {
        if (val.props.value !== props.value) {
          return val;
        }
      });
    });
  };

  return (
    <div>
      <ul>
        <p>
          {props.value} - {props.value1} {props.value2}{" "}
        </p>
        <button type="button" onClick={ondeleteHandler}>
          Delete product
        </button>
      </ul>
    </div>
  );
};

export default Product;
