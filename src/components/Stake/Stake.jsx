import React, { Component } from "react";
import PropTypes from "prop-types";

class Stake extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <div className="selected_odds__total_odds">
          <span>STAKE:{value} </span>
          <span className="stake">
            <form action="" className="stake_form">
              <span className="stake-btn" onClick={onDecrement}>
                -
              </span>
              <input
                className="stake_input"
                defaultValue={value}
                value={value}
                type="text"
              />
              <span className="stake-btn" onClick={onIncrement}>
                +
              </span>
            </form>
          </span>
        </div>

        <div className="selected_odds__amount_buttons">
          <button>1,000</button>
          <button>5,000</button>
          <button>10,000</button>
        </div>
      </div>
    );
  }
}

Stake.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Stake;
