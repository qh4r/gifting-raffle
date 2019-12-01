import React from 'react';
import { Button, Form as UiForm, Segment, Grid, Message } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { Field, Form } from 'react-final-form';

import { useAuthDispatch, useAuthState, useLocale } from '../../shared/hooks';
import { emailValidator, requireValidator } from '../../shared/validators';
import { SignUpBody } from '../../api/actions/auth/authActions';
import { SET_TOKENS, START_AUTHORIZING } from '../../context/auth/authReducer/authReducer';
import { StyledGrid } from '../../shared/components/styledGrid/StyledGrid';
import { AbsoluteImage, AbsoluteImageContainerForm } from '../../shared/components/absoluteImage/AbsoluteImage';

import { ErrorText } from './SignUp.styles';
import { SignUpProps } from './SignUp.types';
import dabSanta from 'assets/images/santa_dab.png';

export const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {
  const { formatMessage } = useLocale();
  const { isAuthorized } = useAuthState();
  const dispatch = useAuthDispatch();

  const handleSubmit = async (body: SignUpBody) => {
    const { payload, error } = await onSubmit(body);

    if (!error && payload) {
      dispatch({
        type: START_AUTHORIZING,
      });

      return dispatch({
        type: SET_TOKENS,
        accessToken: payload.accessToken,
      });
    }

    if (payload && payload.error) {
      return payload.error;
    }

    return {
      id: 'error.unknown',
    };
  };

  const handleValidate = (values: any) => {
    const errors: any = {};

    if (values.password && values.password.length < 8) {
      errors.password = { id: 'error.password.tooShort' };
    }

    if (values.repeatPassword !== values.password) {
      errors.repeatPassword = { id: 'error.password.notMatching' };
    }

    return errors;
  };

  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  return (
    <Form
      validate={handleValidate}
      onSubmit={handleSubmit}
      render={({ handleSubmit, submitting, pristine, submitErrors, dirtySinceLastSubmit }) => (
        <StyledGrid textAlign="center" verticalAlign="middle">
          <Grid.Column mobile={14} tablet={8} largeScreen={6} computer={6}>
            <AbsoluteImageContainerForm onSubmit={handleSubmit} size="large">
              <Segment raised piled>
                <Field name="email" validate={emailValidator}>
                  {({ input, meta }) => (
                    <UiForm.Input
                      fluid
                      error={meta.dirty && meta.error && formatMessage({ id: meta.error.id })}
                      input={input}
                      icon="mail"
                      iconPosition="left"
                      placeholder={formatMessage({ id: 'register.email' })}
                    />
                  )}
                </Field>
                <Field name="name" validate={requireValidator}>
                  {({ input, meta }) => (
                    <UiForm.Input
                      fluid
                      error={meta.dirty && meta.error && formatMessage({ id: meta.error.id })}
                      input={input}
                      icon="user"
                      iconPosition="left"
                      placeholder={formatMessage({ id: 'register.name' })}
                    />
                  )}
                </Field>
                <Field name="password" type="password" validate={requireValidator}>
                  {({ input, meta }) => (
                    <UiForm.Input
                      fluid
                      error={meta.dirty && meta.error && formatMessage({ id: meta.error.id })}
                      input={input}
                      icon="lock"
                      iconPosition="left"
                      placeholder={formatMessage({ id: 'register.password' })}
                      type="password"
                    />
                  )}
                </Field>
                <Field name="repeatPassword" type="password" validate={requireValidator}>
                  {({ input, meta }) => (
                    <UiForm.Input
                      fluid
                      error={meta.dirty && meta.error && formatMessage({ id: meta.error.id })}
                      input={input}
                      icon="repeat"
                      iconPosition="left"
                      placeholder={formatMessage({ id: 'register.repeat' })}
                      type="password"
                    />
                  )}
                </Field>
                {!submitting && submitErrors && submitErrors.id && !dirtySinceLastSubmit && (
                  <ErrorText>{formatMessage({ id: submitErrors.id })}</ErrorText>
                )}
                <Button type="submit" disabled={pristine || submitting} color="twitter" fluid size="large">
                  {formatMessage({ id: 'register.confirm' })}
                </Button>
              </Segment>
              <AbsoluteImage floatRight size="tiny" src={dabSanta} />
            </AbsoluteImageContainerForm>
            <Message>
              {formatMessage({ id: 'register.old' })} <Link to="/login">{formatMessage({ id: 'register.login' })}</Link>
            </Message>
          </Grid.Column>
        </StyledGrid>
      )}
    />
  );
};
