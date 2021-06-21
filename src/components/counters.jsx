import React, { PureComponent } from "react";

class Counters extends PureComponent {
  render() {
    const { onAdd, onReset, renderCounter } = this.props;
    return (
      <div>
        <div
          style={{
            backgroundColor: "aliceblue",
          }}
        >
          <button
            className="btn btn-primary btn-sm m-2"
            style={{ position: "relative", left: 35, width: 60 }}
            onClick={onAdd}
          >
            Add
          </button>
          <button
            className="btn btn-warning btn-sm m-2"
            style={{ position: "relative", left: 58, width: 60 }}
            onClick={onReset}
          >
            Reset
          </button>
        </div>
        {renderCounter()}
      </div>
    );
  }
}

export default Counters;
