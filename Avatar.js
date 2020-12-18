import * as React from "react";
import "./Avatar.css";

class App extends React.Component {
  render() {
    const { id, avtImag, havFocus } = this.props;
    return (
      <div>
        <h2>{id}</h2>
        <img
          className={"defImage " + (havFocus ? "focus" : "")}
          src={avtImag}
        />
      </div>
    );
  }
}

export default App;
