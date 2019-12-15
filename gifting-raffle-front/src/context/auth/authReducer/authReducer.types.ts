export type Token = {
  userId: string;
  name: string;
}
export type Action = {
  type: string;
  name?: string;
  decodedToken?: Token;
  accessToken?: string;
};
