export type LocationContextType<T> = {
  path: string;
  search: string;
  push: (path: string) => void;
  params: T | { [key: string]: string };
};
