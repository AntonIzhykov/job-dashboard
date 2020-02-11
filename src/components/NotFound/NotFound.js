import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {
  handleRedirectBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div
        onClick={this.handleRedirectBack}
        className="home-wrapper d-flex align-items-center justify-content-center cursor-pointer"
      >
        not found
      </div>
    );
  }
}

export default withRouter(NotFound);
