import styled from 'styled-components/macro';

export const Wrapper = styled.section`
  width: 100%;
  height: 160px;
  max-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  grid-area: rolebuttonblock;
`;

export const RoleButtonBlock = styled.fieldset`
  border: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 100px;
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 30px;
  justify-items: center;
  grid-template-areas: 
  'radio radio radio radio radio radio'
  'button button button button button button'
  ;
`;

export const RoleButton = styled.label`
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 40px;
  width: 100%;
  min-width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Helvetica;
  font-size: 0.85rem;
  font-weight: bold;
  color: #104690;
  text-align: center;
`;

export const RoleButtonBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-width: 100px;
  height: 40px;
  /* background-color: ${(props) => props.color || (props.color && '#d17e00') || '#ffffff'}; */
  background-color: #ffffff;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.2);
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #ffffff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const RoleButtonInput = styled.input`
  height: 120px;
  width: 120px;
  cursor: pointer;
  position: absolute;
  opacity: 0;
  &:checked ${RoleButtonBackground} {
    background-color: #ff0000;
  }
`;
