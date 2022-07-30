import styled from 'styled-components/macro';

export const FooterLink = styled.li`
  padding-top: 24px;
  margin: 0;
  text-decoration: none;
  font-family: Helvetica;
  color: #fff;
  font-size: ${(props) => props.value || '0.85rem'};
  font-weight: ${(props) => props.itemProp || 'medium'};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
`;
