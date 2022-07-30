import styled from 'styled-components/macro';

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  z-index: 2;
  background: linear-gradient(270deg, rgba(10, 50, 101, 0.84) 0%, rgba(137, 25, 106, 0.84) 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BannerWrapper = styled.div`
  position: relative;
  margin: 40px 0px 40px 0px;
  width: 100%;
  height: 200px;
  justify-self: flex-end;
`;
