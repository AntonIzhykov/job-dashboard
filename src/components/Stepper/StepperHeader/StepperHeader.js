import React, { PureComponent } from 'react';
import './StepperHeader.scss';
import { Link } from 'react-router-dom';
import { SvgRender } from 'components/common';
import { cornerRight } from 'assets/icons';

class StepperHeader extends PureComponent {
  renderNavMenu = () => {
    const { steps, currentStep, maxStep, toStep } = this.props;

    return (
      <div className="steps">
        {steps.map(
          (step, index) =>
            index <= maxStep && (
              <div
                className={`${index === currentStep ? 'current-step' : 'prev-step'} step`}
                key={index}
              >
                <span onClick={() => toStep(index)}>{step.title}</span>
                {index < maxStep && index + 1 !== steps.length && (
                  <SvgRender
                    path={cornerRight}
                    wrapperClassName="corner-right"
                    style={{ fill: 'black', height: '10px', width: '5px' }}
                  />
                )}
              </div>
            )
        )}
      </div>
    );
  };

  render() {
    const {
      steps,
      currentStep,
      link: { title, to, callBack }
    } = this.props;

    const progressBarWidth = (100 / steps.length) * (currentStep + 1) + '%';

    const NavMenu = this.renderNavMenu;

    return (
      <div className="header">
        <span className="title">GetHired.ai</span>
        {currentStep < steps.length && (
          <>
            <div className="progress-bar" style={{ width: progressBarWidth }} />
            <NavMenu />
            <Link className="link" to={to} onClick={callBack}>
              {title}
            </Link>
          </>
        )}
      </div>
    );
  }
}

export default StepperHeader;
