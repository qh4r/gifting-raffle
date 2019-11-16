import { Container, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import redBox from "../../../assets/images/red_gift.svg";
import React from "react";
import { useAuthState, useLocale } from "../../../shared/hooks";
import { StyledMenu } from "./Header.styles";

export const Header = () => {
  const { formatMessage } = useLocale();
  const { name, isAuthorized } = useAuthState();

  return (
    <StyledMenu fixed='top' inverted>
      <Container>
        <Menu.Item to={"/"} as={Link} header>
          <Image size='mini' src={redBox} style={{ marginRight: '1.5em' }}/>
          {formatMessage({ id: "header.name" })}
        </Menu.Item>
        <Menu.Menu position='right'>
          {isAuthorized ? (
              <>
                <Menu.Item>
                  {name}
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="/logout"
                >
                  {formatMessage({ id: "header.logout" })}
                </Menu.Item>
              </>
            )
            : (
              <>
                <Menu.Item
                  as={Link}
                  to="/login"
                >
                  {formatMessage({ id: "header.login" })}
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="/sign-up"
                >
                  {formatMessage({ id: "header.signUp" })}
                </Menu.Item>
              </>
            )}
        </Menu.Menu>
      </Container>
    </StyledMenu>
  )
};
