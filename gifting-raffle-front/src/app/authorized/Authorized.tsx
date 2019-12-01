import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DashboardContainer } from '../dashboard/DashboardContainer';
import { DetailsContainer } from '../details/DetailsContainer';
import { CreateContainer } from '../create/CreateContainer';
import { JoinContainer } from '../join/JoinContainer';

export const Authorized: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={DashboardContainer} />
      <Route path="/raffle/create" exact component={CreateContainer} />
      <Route path="/raffle/join" exact component={JoinContainer} />
      <Route path="/raffle/:raffleId" exact component={DetailsContainer} />

      <Redirect to="/not-found" />
    </Switch>
  );
};
