import * as React from 'react';
import clsx from 'clsx';
import { PpIconEmpty } from '../../../../../components/PpIconEmpty';
import { useColorlibStepIconStyles } from './StepperChart.style';

export function ColorlibStepIcon(props: any) {
  const classes = useColorlibStepIconStyles();
  const { active, completed, icon } = props;

  const icons: any = {
    1: <PpIconEmpty size="40px" />,
    2: <PpIconEmpty size="40px" />,
    3: <PpIconEmpty size="40px" />,
    4: <PpIconEmpty size="40px" />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(icon)]}
    </div>
  );
}
