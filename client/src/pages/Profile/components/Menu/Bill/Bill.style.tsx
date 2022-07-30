import styled from 'styled-components/macro';

export const Bill = styled.div`
  width: 80%;
  line-height: 20px;
  text-align: left;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Helvetica;
  color: #fff;
  font-size: 0.938rem;
  font-weight: 700;
`;

export const Wrapper = styled.section`
  cursor: default;
  height: 50px;
  width: 120px;

  border-radius: 5px;
  background: linear-gradient(270deg, rgba(13, 71, 145, 1) 0%, rgba(137, 25, 106, 1) 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.div`
  padding-left: 5px;
`;
