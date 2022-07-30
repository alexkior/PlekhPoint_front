import * as React from 'react';
import { InfoBlock as StyledInfoBlock } from './InfoBlock.style';
import { Title } from './components/Title';
import { TitleBackground } from './components/TitleBackground';
import { Text } from './components/Text';
import { Picture } from './components/Picture';
import { Icon } from './components/Icon';

export interface InfoBlockProps {
  title?: string;
  icon?: string;
  text?: string;
  picture?: string;
  align?: boolean;
}

const InfoBlock:
  React.FC<InfoBlockProps> = function InfoBlock(props) {
    return (
      <StyledInfoBlock>
        <Icon
          icon={props.icon}
          align={props.align}
        />

        <Title align={props.align}>
          {props.title}
        </Title>

        <Text align={props.align}>
          {props.text}
        </Text>

        <Picture align={props.align} picture={props.picture} />
        <TitleBackground />
      </StyledInfoBlock>
    );
  };

export default InfoBlock;
