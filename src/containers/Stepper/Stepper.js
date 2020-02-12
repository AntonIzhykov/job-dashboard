import React, { Component } from 'react';
import { StepperHeader as Header } from 'components';

class Stepper extends Component {
  state = {
    currentStep: 0,
    maxStep: 0
  };

  toNextStep = () => {
    const { currentStep } = this.state;
    this.setState(
      {
        currentStep: currentStep <= this.props.steps.length ? currentStep + 1 : currentStep
      },
      this.setMaxStep
    );
  };

  toPrevStep = () => {
    const { currentStep } = this.state;
    this.setState(
      {
        currentStep: currentStep - 1 >= 0 ? currentStep - 1 : currentStep
      },
      this.setMaxStep
    );
  };

  toStep = step => {
    this.setState(
      {
        currentStep: step
      },
      this.setMaxStep
    );
  };

  setMaxStep = () => {
    const { maxStep, currentStep } = this.state;
    console.log('setMaxStep');
    console.log('currentStep', currentStep);
    console.log('maxStep', maxStep);

    this.setState({
      maxStep: currentStep > maxStep ? currentStep : maxStep
    });
  };

  render() {
    const { steps, headerLink: link } = this.props;
    const { currentStep, maxStep } = this.state;

    console.log('maxStep in render', maxStep);

    return (
      <div className="stepper">
        <Header
          steps={steps}
          currentStep={currentStep}
          maxStep={maxStep}
          link={link}
          toStep={this.toStep}
        />
        <div className="stepper-content">
          <div onClick={this.toPrevStep}>Prev</div>
          <div onClick={this.toNextStep}>Next</div>
        </div>
      </div>
    );
  }
}

export default Stepper;
