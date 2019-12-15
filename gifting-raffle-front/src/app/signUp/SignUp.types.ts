import { QueryResponse } from 'react-fetching-library';

export type SignUpProps = {
  onSubmit: (props: {
    email: string;
    name: string;
    password: string;
    repeatPassword: string;
  }) => Promise<QueryResponse>;
};
