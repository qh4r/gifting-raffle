import React from 'react';
import { Grid, Segment, Button, List, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useLocale } from '../../shared/hooks';
import { FullscreenLoader } from '../../shared/components/fullscreenLoader/FullscreenLoader';

import { DashboardContainer, Empty, ListTitle, StyledColumn, StyledListHeader } from './Dashboard.styles';
import { DashboardPropsType } from './Dashboard.types';
import gift from 'assets/images/red_gift.svg';
import openGift from 'assets/images/gift_open.svg';
import crown from 'assets/images/crown.svg';

export const Dashboard: React.FC<DashboardPropsType> = ({ rafflesList, loading }) => {
  const { formatMessage } = useLocale();

  if (loading) {
    return <FullscreenLoader />;
  }

  return (
    <DashboardContainer className="dashboard-container">
      <Grid textAlign="center">
        <Grid.Column mobile={12} tablet={5} computer={4}>
          <Button as={Link} to="/raffle/join" size="big" fluid color="red">
            {formatMessage({ id: 'list.join' })}
          </Button>
        </Grid.Column>
        <Grid.Column mobile={12} tablet={5} computer={4}>
          <Button as={Link} to="/raffle/create" size="big" fluid color="yellow">
            {formatMessage({ id: 'list.create' })}
          </Button>
        </Grid.Column>
        <StyledColumn textAlign="left" verticalAlign="middle" mobile={16} tablet={12} computer={10}>
          <Segment padded raised piled>
            <ListTitle>{formatMessage({ id: 'list.header' })}</ListTitle>
            <List animated size="massive" verticalAlign="middle">
              {rafflesList && rafflesList.length ? (
                rafflesList.map(item => (
                  <List.Item key={item.id} as={Link} to={`/raffle/${item.id}`}>
                    {item.finished ? <Image size="mini" src={openGift} /> : <Image size="mini" src={gift} />}
                    <List.Content>
                      <StyledListHeader>{item.name}</StyledListHeader>
                    </List.Content>
                    {item.isOwner ? <Image centered size="mini" src={crown} /> : null}
                  </List.Item>
                ))
              ) : (
                <Empty>{formatMessage({ id: 'list.empty' })}</Empty>
              )}
            </List>
          </Segment>
        </StyledColumn>
      </Grid>
    </DashboardContainer>
  );
};
