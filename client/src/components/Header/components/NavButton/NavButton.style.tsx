import styled from 'styled-components/macro';
import { NavButtonProps } from './NavButton';

export const NavButton = styled.div<NavButtonProps>`
  width: 18%;
  height: 30px;
  position: relative;
  border-radius: 5px;

  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  font-family: Helvetica;
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;

  background-color:  ${(props) => props.color || (props.isCurrentLocation && '#d17e00') || ''};
  cursor: pointer;
  &:hover {
    background-color: #d17e00;
  }
  &:active {
    background-color: #d17e00;
  }
`;
