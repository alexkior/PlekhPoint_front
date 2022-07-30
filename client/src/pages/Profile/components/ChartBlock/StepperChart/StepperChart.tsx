import * as React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { PpIconGray } from '../../../../../components/PpIconGray';

import { StepperChart as StyledStepperChart, ColorlibConnector, IconWrapper } from './StepperChart.style';

import { ColorlibStepIcon } from './MuiFunctions';
import { getStepperChartSteps } from '../../../../../helpers/charts';

export interface StepperChartProps {
  step?: number;
}

const StepperChart: React.FC<StepperChartProps> = function StepperChart(props) {
  const [activeStep] = React.useState(props.step);

  const steps = getStepperChartSteps();

  return (
    <StyledStepperChart>
      <Stepper
        style={{ padding: '0' }}
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step style={{ padding: '0' }} key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <h4
                style={{
                  height: '30px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {label}
                <IconWrapper>
                  <PpIconGray size="14px" />
                </IconWrapper>
              </h4>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </StyledStepperChart>
  );
};

export default StepperChart;
