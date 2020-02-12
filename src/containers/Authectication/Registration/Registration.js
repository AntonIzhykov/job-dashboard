import React, { Component } from 'react';
import Stepper from '../../Stepper';

class Registration extends Component {
  basicState = {
    steps: [
      {
        title: 'Your Information'
      },
      {
        title: 'Company/Agency Information'
      },
      {
        title: 'Who you are'
      },
      {
        title: 'Wrap it up'
      }
    ],
    headerLink: {
      title: 'Back to Login Screen',
      to: '/signIn'
    }
  };
  render() {
    const { steps, headerLink } = this.basicState;
    return <Stepper steps={steps} headerLink={headerLink} />;
  }
}

export default Registration;
