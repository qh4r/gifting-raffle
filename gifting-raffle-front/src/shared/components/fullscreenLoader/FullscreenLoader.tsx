import React from 'react';
import classNames from 'classnames';
import { Dimmer, Loader } from "semantic-ui-react";


import * as Styles from './FullscreenLoader.styles';
import { FullscreenLoaderProps } from './FullscreenLoader.types';
import { useLocale } from "../../hooks";

export const FullscreenLoader: React.FC<FullscreenLoaderProps> = ({ className, style }) => {
  const { formatMessage } = useLocale();

  return (
    <Styles.Wrapper className={classNames(className, 'fullscreen-loader')} style={style}>
        <Dimmer active inverted>
          <Loader inverted size='massive'>{formatMessage({ id: "loading" })}</Loader>
        </Dimmer>
    </Styles.Wrapper>
  );
};
