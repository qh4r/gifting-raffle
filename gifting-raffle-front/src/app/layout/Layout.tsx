import React from 'react'
import { AppMenuProps } from "./Layout.types";
import { AppWrapper, ChrimstansText, ContentWrapper } from "./Layout.styles";
import { useLocale } from "../../shared/hooks";
import { Header } from "./header/Header";

const Snow = () => (
  <div className="winter-snow">

    <div className="snow snow--near"></div>
    <div className="snow snow--near snow--alt"></div>

    <div className="snow snow--mid"></div>
    <div className="snow snow--mid snow--alt"></div>

    <div className="snow snow--far"></div>
    <div className="snow snow--far snow--alt"></div>
  </div>
);

export const Layout = ({ children }: AppMenuProps) => {
  const { formatMessage } = useLocale();

  return (<AppWrapper>
    <Snow/>
    <Header/>
    <ChrimstansText>
      {formatMessage({ id: "merryChristmas" })}
    </ChrimstansText>


    <ContentWrapper>
      {children}
    </ContentWrapper>
  </AppWrapper>);
}
