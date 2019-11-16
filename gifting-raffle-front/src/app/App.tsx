import React, { Suspense } from 'react';
import { GlobalStyle } from './App.styles';
import { AppProviders } from "./providers/AppProviders";
import { FullscreenLoader } from "../shared/components/fullscreenLoader/FullscreenLoader";
import { Layout } from "./layout/Layout";
import { Redirect, Route, Switch } from "react-router";
import { AuthorizedRoute } from "../shared/components/authorizedRoute/AuthorizedRoute";
import { LogoutContainer } from "./logout/LogoutContainer";
import { LoginContainer } from "./login/LoginContainer";
import { SignUpContainer } from "./signUp/SignUpContainer";

const App: React.FC = () => {
  return (
    <AppProviders>
      <Suspense fallback={<FullscreenLoader/>}>
        <GlobalStyle/>
        <Layout>
          <Switch>
            <Route path="/logout" exact component={LogoutContainer} />
            <Route path="/login" exact component={LoginContainer} />
            <Route path="/sign-up" exact component={SignUpContainer} />
            <AuthorizedRoute path="/"  />

            <Redirect to="/login" />
          </Switch>
        </Layout>
      </Suspense>
    </AppProviders>);
}

export default App;
