import * as React from 'react';
import { FooterLink as StyledFooterLink } from './FooterLink.style';

export interface FooterLinkProps {
  value?: string;
  itemProp?: string;
}

const FooterLink: React.FC<FooterLinkProps> = function FooterLink(props) {
  return (
    <StyledFooterLink {...props} />
  );
};

export default FooterLink;
