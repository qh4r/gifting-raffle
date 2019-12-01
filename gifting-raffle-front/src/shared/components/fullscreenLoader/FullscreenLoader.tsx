import React from 'react';
import classNames from 'classnames';
import { Dimmer, Image, Container } from 'semantic-ui-react';

import { useLocale } from '../../hooks';

import loaderSanta from 'assets/images/loader_santa.gif';
import { FullscreenLoaderProps } from './FullscreenLoader.types';
import { LoadingText, Wrapper } from './FullscreenLoader.styles';

export const FullscreenLoader: React.FC<FullscreenLoaderProps> = ({ className, style }) => {
  const { formatMessage } = useLocale();

  return (
    <Wrapper className={classNames(className, 'fullscreen-loader')} style={style}>
      <Dimmer active inverted>
        <Container>
          <Image centered size="large" src={loaderSanta} />
          <LoadingText>{formatMessage({ id: 'loading' })}</LoadingText>
        </Container>
      </Dimmer>
    </Wrapper>
  );
};
