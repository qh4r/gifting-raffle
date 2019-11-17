import React from "react";
import { Button, Form as UiForm, Segment, Grid } from "semantic-ui-react";
import { JoinProps } from "./Join.types";
import { useHistory } from "react-router-dom";
import { Field, Form } from 'react-final-form';

import { ErrorText } from "./Join.styles";
import { useLocale } from "../../shared/hooks";
import { requireValidator } from "../../shared/validators";
import { StyledGrid } from "../../shared/components/styledGrid/StyledGrid";
import { JoinRaffleBody } from "../../api/actions/raffles/rafflesActions.types";


export const Join: React.FC<JoinProps> = ({ onSubmit }) => {
  const { formatMessage } = useLocale();

  const history = useHistory();

  const handleSubmit = async (body: JoinRaffleBody) => {
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
        <StyledGrid textAlign='center' verticalAlign='middle'>
          <Grid.Column mobile={14} tablet={8} largeScreen={6} computer={6}>
            <UiForm onSubmit={handleSubmit} size='large'>
              <Segment raised piled>
                <Field name="raffleKey" validate={requireValidator}>
                  {({ input, meta }) => (
                    <UiForm.Input
                      fluid
                      error={meta.dirty && meta.error && formatMessage({ id: meta.error.id })}
                      input={input}
                      icon='key'
                      iconPosition='left'
                      placeholder={formatMessage({ id: "join.key" })}
                    />
                  )}
                </Field>
                {!submitting && submitErrors && submitErrors.id && !dirtySinceLastSubmit && (
                  <ErrorText>{formatMessage({ id: submitErrors.id })}</ErrorText>
                )}
                <Button type="submit" disabled={pristine || submitting} color={"twitter"} fluid size='large'>
                  {formatMessage({ id: "join.submit" })}
                </Button>
              </Segment>
            </UiForm>
          </Grid.Column>
        </StyledGrid>
      )}
    />
  )
};
