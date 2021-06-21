import React, { PureComponent } from "react";
import "./App.css";
import Counter from "./counter";
import Counters from "./counters";
import Navbar from "./navbar";
import { getList, getDetails } from "./axios/AxiosUtil";
import ListComponent from "./axios/ListComponent";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    const initialCounters = [];
    const initialNumber = props.initialNumber ? props.initialNumber : 1;
    for (let i = 0; i < initialNumber; i++) {
      initialCounters.push({ id: i, value: 0 });
    }

    this.state = {
      counters: initialCounters,
      id: initialNumber,
      apiData: {},
    };
  }

  renderCounter = () => {
    const counters = this.state.counters.map((counter) => {
      return (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      );
    });
    return counters;
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    //console.log(counters, counter, index);
    counters[index].value += 1;

    this.setState({
      counters,
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    //console.log(counters, counter, index);
    if (counters[index].value > 0) {
      counters[index].value -= 1;
    }

    this.setState({
      counters,
    });
  };

  handleAdd = () => {
    let counters = [
      ...this.state.counters,
      { id: this.state.id + 1, value: 0 },
    ];
    //console.log(counters);
    this.setState({ counters, id: this.state.id + 1 });
  };

  handleDelete = (counter) => {
    let counters = this.state.counters.slice();
    counters = this.state.counters.filter(
      (counterInState) => counterInState.id !== counter.id
    );
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleListItemClick = (oldData) => {
    getDetails(/*"448804000000805001"*/ oldData.id).then((data) => {
      //console.log("getdetails", data);
      const _apiData = { ...this.state.apiData };
      const _list = _apiData.data;
      const index = _list.findIndex((elem) => elem.id === oldData.id);
      _list[index] = data;
      this.setState({
        apiData: _apiData,
      });
    });
  };

  componentDidMount = () => {
    getList().then((data) => {
      this.setState({ apiData: data });
    });
  };

  render() {
    const { apiData } = this.state;
    return (
      <React.Fragment>
        <Navbar numCounters={this.state.counters.length} />
        <main className="container" style={{ margin: 0 }}>
          <Counters
            counters={this.state.counters}
            renderCounter={this.renderCounter}
            onAdd={this.handleAdd}
            onReset={this.handleReset}
          />
          <hr></hr>
          <h1>Articles</h1>
          {apiData.data && (
            <ListComponent
              list={apiData.data}
              onListItemClick={this.handleListItemClick}
            />
          )}
        </main>
      </React.Fragment>
    );
  }
}
