import React from "react";
import Attack from "../Images/attack.png";
import Defend from "../Images/defend.png";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.defendAttack = this.defendAttack.bind(this);
    this.state = {
      count: 0,
      lastPlay: "",
      gameStatus: "",
    };
  }
  handleAttack = () => {
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        lastPlay: "Attack",
        gameStatus: newCount > 10 ? "You Win !!!" : "",
      };
    });
    //this.setState({ count: this.state.count + 1 });
  };
  defendAttack = () => {
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        lastPlay: "Defence",
        gameStatus: newCount < -10 ? "You Lose !!!" : "",
      };
    });
    //this.setState({ count: this.state.count - 1 });
  };
  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.defendAttack();
    }
  };
  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        lastPlay: "",
        gameStatus: "",
      };
    });
  };
  render() {
    return (
      <div className="row text-center">
        <h1>Game Score : {this.state.count} </h1>
        <p>You will win at +10 points and lose at -10 points!</p>
        <p>Last Play : {this.state.lastPlay}</p>
        <p>Game Status : {this.state.gameStatus}</p>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={Attack}
            onClick={this.handleAttack}
          />
        </div>
        <div className="col-6 col-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={Defend}
            onClick={this.defendAttack}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Restart
          </button>
        </div>
      </div>
    );
  }
}
