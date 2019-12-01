import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';

import redBox from '../../../assets/images/red_gift.svg';
import { useAuthState, useLocale } from '../../../shared/hooks';

import { StyledMenu, Title } from './Header.styles';

export const Header = () => {
  const { formatMessage } = useLocale();
  const { name, isAuthorized } = useAuthState();

  return (
    <StyledMenu fixed="top" inverted>
      <Container>
        <Menu.Item to="/" as={Link} header>
          <Image size="mini" src={redBox} style={{ marginRight: '1.5em' }} />
          <Title>{formatMessage({ id: 'header.name' })}</Title>
        </Menu.Item>
        <Menu.Menu position="right">
          {isAuthorized ? (
            <>
              <Dropdown item text={name}>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/logout">
                    {formatMessage({ id: 'header.logout' })}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <>
              <Menu.Item as={Link} to="/login">
                {formatMessage({ id: 'header.login' })}
              </Menu.Item>
              <Menu.Item as={Link} to="/sign-up">
                {formatMessage({ id: 'header.signUp' })}
              </Menu.Item>
            </>
          )}
        </Menu.Menu>
      </Container>
    </StyledMenu>
  );
};
