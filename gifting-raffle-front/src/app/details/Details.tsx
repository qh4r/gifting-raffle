import React, { useState } from "react";
import { Grid, Segment, Image, Button, Modal, Icon, Header } from "semantic-ui-react";
import { DetailsContainer, Title, Paragraph, Attention, Code } from "./Details.styles";
import { Redirect, useHistory } from "react-router-dom";
import gift from "assets/images/red_gift.svg";
import openGift from "assets/images/gift_open.svg";
import { DetailsProps } from "./Details.types";
import { useLocale } from "../../shared/hooks";
import { FullscreenLoader } from "../../shared/components/fullscreenLoader/FullscreenLoader";

export const Details: React.FC<DetailsProps> = ({ raffle, error, loading, close }) => {
  const { formatMessage } = useLocale();
  const [ isOpen, setOpen ] = useState(false);
  const history = useHistory();

  if (error) {
    return (
      <Redirect to="/"/>
    );
  }

  if (loading) {
    return <FullscreenLoader/>
  }

  if (!raffle) {
    return (
      <Redirect to="/"/>
    )
  }

  const closeRaffle = () => {
    setOpen(false);
    close(raffle.id)
      .then(result => {
        if(result.status === 202) {
          history.push('/');
        }
      });
  };

  const isFinished = raffle.finished;

  return (
    <DetailsContainer className="details-container">
      <Grid verticalAlign="middle" textAlign='center'>
        <Grid.Column textAlign="center" verticalAlign="middle" mobile={16} tablet={12} computer={10}>
          <Segment padded raised piled>
            {isFinished ? (
              <Image centered inline size="small" src={openGift}/>
            ) : (
              <Image centered inline size="small" src={gift}/>
            )}
            <Title>{raffle.name}</Title>
            <Paragraph>
              {formatMessage({ id: "details.participants" })}
              <Attention>{raffle.pairsCount}</Attention>
            </Paragraph>
            {!isFinished ? (
              <>
                <Paragraph>
                  {formatMessage({ id: "details.open" })}
                  <Code>{raffle.raffleKey}</Code>
                </Paragraph>
                {
                  raffle.isOwner ? (
                    <Button disabled={raffle.pairsCount < 2} onClick={() => setOpen(true)} className="button-end" color="red" size="big">
                      {formatMessage({ id: "details.finish" })}
                    </Button>
                  ) : undefined
                }
              </>
            ) : (
              <>
                <Paragraph>
                  {formatMessage({ id: "details.yourPick" })}
                  <Attention>{raffle.yourMatch}</Attention>
                </Paragraph>
              </>
            )}
          </Segment>
        </Grid.Column>
      </Grid>
      <Modal open={isOpen} onClose={() => setOpen(false)} basic size='small'>
        <Header icon='star' content={formatMessage({ id: "details.modal.title" })}/>
        <Modal.Content>
          <p>
            {formatMessage({ id: "details.modal.message" })}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)} basic color='red' inverted>
            <Icon name='remove'/> {formatMessage({ id: "details.modal.no" })}
          </Button>
          <Button onClick={closeRaffle} color='green' inverted>
            <Icon name='checkmark'/> {formatMessage({ id: "details.modal.yes" })}
          </Button>
        </Modal.Actions>
      </Modal>
    </DetailsContainer>
  )
};
