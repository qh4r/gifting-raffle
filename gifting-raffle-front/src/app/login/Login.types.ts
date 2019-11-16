import { QueryResponse } from "react-fetching-library";

export type LoginProps = {
  onSubmit: (props: {
    email: string;
    password: string;
  }) => Promise<QueryResponse>;
}
