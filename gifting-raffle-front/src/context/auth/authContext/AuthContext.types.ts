import { Dispatch } from 'react';

import { Action } from '../authReducer/authReducer.types';

export type AuthStateContextType = {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  name?: string;
  accessToken: string;
};

export type AuthDispatchContextType = Dispatch<Action>;
