import React from "react";

export default function Navbar({ numCounters }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span style={{ fontFamily: "cursive" }}>Counters </span>
          <span style={numCounters === 0 ? { fontFamily: "cursive" } : {}}>
            {numCounters === 0 ? `(No Counters)` : `(${numCounters})`}
          </span>
        </a>
      </div>
    </nav>
  );
}
