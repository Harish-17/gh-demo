import React from "react";

const counter = (props) => {
  return (
    <div>
      <span className="badge badge-primary m-2">{props.counter.value}</span>
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={() => props.onIncrement(props.counter)}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={() => props.onDecrement(props.counter)}
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.counter)}
      >
        Delete
      </button>
    </div>
  );
};

export default counter;
