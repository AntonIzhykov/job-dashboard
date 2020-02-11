import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import { getUser } from 'views/auth/_actions';
import { apiService } from 'store/api';
import { loadProgressBar } from 'axios-progress-bar';

class ContentWrapper extends Component {
  createLoadProgressBar = () => {
    const configNprogress = {
      showSpinner: false,
      parent: '#loader',
      easing: 'ease',
      speed: 500,
      minimum: 0.1
    };

    loadProgressBar(configNprogress, apiService);
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getUser();
      this.createLoadProgressBar();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isAuthenticated && this.props.isAuthenticated) {
      this.props.getUser();
      this.createLoadProgressBar();
    }
  }

  render() {
    return <div className="content-wrapper">{this.props.children}</div>;
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  // getUser: () => dispatch(getUser)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContentWrapper)
);
