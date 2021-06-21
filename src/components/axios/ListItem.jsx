import React, { Component, PureComponent } from "react";
import "./ListItem.css";

export default class ListItem extends PureComponent {
  componentDidUpdate = () => {
    console.log(this.props.data.title, "componentDidUpdate");
  };

  //   shouldComponentUpdate = (newProps, newState) => {
  //     //console.log(newProps.data.title !== this.props.data.title);
  //     return newProps.data.title !== this.props.data.title ? true : false;
  //   };

  render() {
    const { data, onListItemClick } = this.props;
    return (
      <li className="list-group-item">
        <div className="child">
          <b>Id : </b>
          {data.id}
        </div>
        <div className="child">
          <b>Title : </b>
          <span
            onClick={() => {
              onListItemClick(data);
            }}
          >
            {data.title}
          </span>
        </div>
      </li>
    );
  }
}
