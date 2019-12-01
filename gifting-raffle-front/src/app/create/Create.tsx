import React from 'react';
import { Button, Form as UiForm, Segment, Grid } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { Field, Form } from 'react-final-form';

import { useLocale } from '../../shared/hooks';
import { requireValidator } from '../../shared/validators';
import { StyledGrid } from '../../shared/components/styledGrid/StyledGrid';
import { CreateRaffleBody } from '../../api/actions/raffles/rafflesActions.types';
import { AbsoluteImage, AbsoluteImageContainerForm } from '../../shared/components/absoluteImage/AbsoluteImage';
import dabSanta from '../../assets/images/santa_dab.png';

import { ErrorText } from './Create.styles';
import { CreateProps } from './Create.types';

export const Create: React.FC<CreateProps> = ({ onSubmit }) => {
  const { formatMessage } = useLocale();

  const history = useHistory();

  const handleSubmit = async (body: CreateRaffleBody) => {
    const { payload, error } = await onSubmit(body);

    if (!error && payload) {
      history.push(`/raffle/${payload.raffleId}`);
    }

    if (payload && payload.error) {
      return payload.error;
    }

    return {
      id: 'error.unknown',
    };
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit, submitting, pristine, submitErrors, dirtySinceLastSubmit }) => (
        <StyledGrid textAlign="center" verticalAlign="middle">
          <Grid.Column mobile={14} tablet={8} largeScreen={6} computer={6}>
            <AbsoluteImageContainerForm onSubmit={handleSubmit} size="large">
              <Segment raised piled>
                <Field name="name" validate={requireValidator}>
                  {({ input, meta }) => (
                    <UiForm.Input
                      fluid
                      error={meta.dirty && meta.error && formatMessage({ id: meta.error.id })}
                      input={input}
                      icon="tree"
                      iconPosition="left"
                      placeholder={formatMessage({ id: 'create.name' })}
                    />
                  )}
                </Field>
                {!submitting && submitErrors && submitErrors.id && !dirtySinceLastSubmit && (
                  <ErrorText>{formatMessage({ id: submitErrors.id })}</ErrorText>
                )}
                <Button type="submit" disabled={pristine || submitting} color="twitter" fluid size="large">
                  {formatMessage({ id: 'create.submit' })}
                </Button>
              </Segment>
              <AbsoluteImage centered size="small" src={dabSanta} />
            </AbsoluteImageContainerForm>
          </Grid.Column>
        </StyledGrid>
      )}
    />
  );
};
