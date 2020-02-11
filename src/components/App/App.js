import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Sidebar from './Sidebar';
import "./App.css";

class App extends Component {
  render() {
    console.log(this.props);

    return (

          <div id="content">
            {/*{this.props.authenticated && <Sidebar />}*/}
            <main id="main">{this.props.children}</main>
          </div>
    );
  }
}

export default withRouter(App);

