import React, { Component } from "react";
import ListItem from "./ListItem";

export default class ListComponent extends Component {
  renderItems(list, onListItemClick) {
    return list.map((element) => {
      return (
        <ListItem
          key={element.id}
          data={element}
          onListItemClick={onListItemClick}
        />
      );
    });
  }
  render() {
    const { list, onListItemClick } = this.props;
    return (
      <ol className="list-group list-group-horizontal">
        {this.renderItems(list, onListItemClick)}
      </ol>
    );
  }
}
