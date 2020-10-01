import React, { Component } from "react";

class ErrorBonudry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true});
  }

  render() {
    if(this.state.hasError) {
      return (
        <div className='tc'>
          <h1>Ooooops. That is not good!</h1>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBonudry;