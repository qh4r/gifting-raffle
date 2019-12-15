import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { FullscreenLoader } from '../shared/components/fullscreenLoader/FullscreenLoader';
import { AuthorizedRoute } from '../shared/components/authorizedRoute/AuthorizedRoute';

import { GlobalStyle } from './App.styles';
import { AppProviders } from './providers/AppProviders';
import { Layout } from './layout/Layout';
import { LogoutContainer } from './logout/LogoutContainer';
import { LoginContainer } from './login/LoginContainer';
import { SignUpContainer } from './signUp/SignUpContainer';
import { Authorized } from './authorized/Authorized';

const App: React.FC = () => {
  return (
    <AppProviders>
      <Suspense fallback={<FullscreenLoader />}>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route path="/logout" exact component={LogoutContainer} />
            <Route path="/login" exact component={LoginContainer} />
            <Route path="/sign-up" exact component={SignUpContainer} />
            <AuthorizedRoute path="/" component={Authorized} />

            <Redirect to="/" />
          </Switch>
        </Layout>
      </Suspense>
    </AppProviders>
  );
};

export default App;
