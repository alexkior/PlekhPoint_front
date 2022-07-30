import { Skeleton } from '@material-ui/lab';
import * as React from 'react';
import { getPPFormatedString } from '../../../../../helpers/getPPFormatedString';
import { Bill as StyledBill, Wrapper, InnerWrapper, IconWrapper } from './Bill.style';
import { PpIconEmpty } from '../../../../../components/PpIconEmpty';

export interface BillProps {
  userBillCount?: number;
  isLoading: boolean;
}

const Bill:
  React.FC<BillProps> = function Bill(props) {
    const { userBillCount, isLoading } = props;

    return (
      <Wrapper>
        {isLoading
          ? <Skeleton width="80%" height="80%" />
          : (
            <StyledBill>
              Счет:
              <br />
              <InnerWrapper>
                {getPPFormatedString(userBillCount)}
                <IconWrapper>
                  <PpIconEmpty size="14px" />
                </IconWrapper>
              </InnerWrapper>
            </StyledBill>
          )}
      </Wrapper>
    );
  };

export default Bill;
