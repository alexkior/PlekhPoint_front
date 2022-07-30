import styled from 'styled-components/macro';

export const TableTitle = styled.li`
  width: 100%;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Helvetica;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;

  list-style: none;
`;

export const TableTitleWrapper = styled.ul`
  cursor: default;
  height: 40px;

  border-radius: 5px;
  background: linear-gradient(
    270deg,
    rgba(13, 71, 145, 1) 0%,
    rgba(137, 25, 106, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  list-style: none;
`;
