import * as React from 'react';
import { Footer as StyledFooter, Wrapper, InnerWrapper, InnerColumn } from './Footer.style';
import { Background } from './components/Background';
import { FooterLink } from './components/FooterLink';
import { ReactComponent as DocIcon } from '../../assets/icons/doc.svg';
import { ReactComponent as TgIcon } from '../../assets/icons/tg.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as AtIcon } from '../../assets/icons/at.svg';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = function Footer(props) {
  return (
    <Wrapper>
      <StyledFooter>
        <InnerWrapper>
          <InnerColumn>
            <FooterLink value="1rem" itemProp="bold">
              Контакты
            </FooterLink>
            <FooterLink>
              <AtIcon
                style={{
                  height: '16px',
                  marginRight: '8px',
                }}
              />
              pp@rea.ru
            </FooterLink>
            <FooterLink>
              <PhoneIcon
                style={{
                  height: '16px',
                  marginRight: '8px',
                }}
              />
              +7 (495) 222-22-22
            </FooterLink>
          </InnerColumn>

          <InnerColumn>
            <FooterLink value="1rem" itemProp="bold">
              Новости
            </FooterLink>
            <FooterLink>
              <TgIcon
                style={{
                  height: '16px',
                  marginRight: '8px',
                }}
              />
              ppnews
            </FooterLink>
          </InnerColumn>

          <InnerColumn>
            <FooterLink value="1rem" itemProp="bold">
              Документы
            </FooterLink>
            <FooterLink>
              <DocIcon
                style={{
                  height: '16px',
                  marginRight: '8px',
                }}
              />
              документ
            </FooterLink>
            <FooterLink>
              <DocIcon
                style={{
                  height: '16px',
                  marginRight: '8px',
                }}
              />
              документ
            </FooterLink>
          </InnerColumn>
        </InnerWrapper>
      </StyledFooter>
      <Background />
    </Wrapper>
  );
};

export default Footer;
