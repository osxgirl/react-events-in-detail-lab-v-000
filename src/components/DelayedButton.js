import React, { Component } from 'react'

class DelayedButton extends Component{

  handleDelayedClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
      }, this.props.delay);
  };

  render(){
    return (
      <div>
        <button onClick={this.handleDelayedClick}>Delayed Click</button>
      </div>
    )
  }
}

export default DelayedButton
