import styled from 'styled-components/macro';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';

export const StepperChart = styled.div`
  grid-column: 2 / 3;
  cursor: default;
  position: relative;
  width: 100%;
  min-width: 720px;
  min-height: 100px;
  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-content: start;
  justify-items: stretch;
`;

export const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(237, 142, 0) 0%, rgb(237, 142, 0) 50%, rgb(208, 38, 160) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(237, 142, 0) 0%, rgb(237, 142, 0) 50%, rgb(208, 38, 160) 100%)',
  },
});

export const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(237, 142, 0) 0%, rgb(237, 142, 0) 50%, rgb(208, 38, 160) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(237, 142, 0) 0%, rgb(237, 142, 0) 50%, rgb(208, 38, 160) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

export const IconWrapper = styled.div`
  padding-left: 5px;
  padding-bottom: 1px;
`;
