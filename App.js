import * as React from "react";
import Avatar from "./Avatar";
import "./App.css";

class App extends React.Component {
  state = {
    data: null,
    startAt: 0,
    totalElem: 3,
  };
  leftClick = () => {
    this.setState((prev) => {
      return { startAt: (prev.startAt + 1) % prev.totalElem };
    });
  };
  rightClick = () => {
    this.setState((prev) => {
      return {
        startAt:
          (prev.startAt - 1 < 0 ? prev.totalElem - 1 : prev.startAt - 1) %
          prev.totalElem,
      };
    });
  };
  componentDidMount() {
    const listData = {
      items: [
        {
          id: "1",
          avtImag:
            "https://images.unsplash.com/photo-1605915517089-c9b000a7d032?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
        },
        {
          id: "2",
          avtImag:
            "https://images.unsplash.com/photo-1606061587005-c1c57d134082?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        },
        {
          id: "3",
          avtImag:
            "https://images.unsplash.com/photo-1606036525923-525fa3b35465?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
        },
      ],
    };
    this.setState((prev) => {
      return { data: listData };
    });
  }
  render() {
    let arr = [];
    if (this.state.data !== null) {
      const dataItemCount = Object.keys(this.state.data.items).length;
      if (this.state.totalElem != dataItemCount) {
        this.setState((prev) => {
          return { totalElem: dataItemCount };
        });
      }
      for (let i = this.state.startAt; i < this.state.totalElem; i++) {
        let newElem = { ...this.state.data.items[i], havFocus: false };
        if (
          i ==
          (this.state.startAt + parseInt(this.state.totalElem / 2)) %
            this.state.totalElem
        ) {
          newElem.havFocus = true;
        }
        arr.push(newElem);
      }
      for (let i = 0; i <= this.state.startAt - 1; i++) {
        let newElem = { ...this.state.data.items[i], havFocus: false };
        if (
          i ==
          (this.state.startAt + parseInt(this.state.totalElem / 2)) %
            this.state.totalElem
        ) {
          newElem.havFocus = true;
        }
        arr.push(newElem);
      }
    }
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sample
          </a>
        </header>
        <div className="carusalCss">
          {arr.map((item) => (
            <Avatar key={item.id} {...item} />
          ))}
        </div>
        <button onClick={this.leftClick}>LeftClick</button>
        <button onClick={this.rightClick}>RightClick</button>
      </div>
    );
  }
}

export default App;
