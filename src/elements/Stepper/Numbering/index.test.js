import React from 'react';
import { render } from '@testing-library/react';
import Numbering from './index';

describe('Numbering Component', () => {
  const data = {
    step1: 'Step 1',
    step2: 'Step 2',
    step3: 'Step 3',
  };

  it('renders the numbering component with correct active step', () => {
    const { container } = render(
      <Numbering data={data} current="step2" />
    );

    const activeStepElement = container.querySelector('.active');
    expect(activeStepElement.textContent).toBe('2');
  });

  it('renders the numbering component without the last step', () => {
    const { container } = render(
      <Numbering data={data} current="step3" />
    );

    const steps = container.querySelectorAll('li');
    expect(steps.length).toBe(2);
  });

  it('renders the numbering component with custom class name', () => {
    const { container } = render(
      <Numbering data={data} current="step1" className="custom-class" />
    );

    const numberingElement = container.querySelector('.stepper.custom-class');
    expect(numberingElement).toBeInTheDocument();
  });
});
