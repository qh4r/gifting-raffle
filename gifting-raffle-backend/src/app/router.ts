import * as express from "express";

export interface RoutingProps {
  usersRouting: express.Router;
  rafflesRouting: express.Router;
// ROUTES_INTERFACE
}

export const createRouter = ({
  usersRouting,
  rafflesRouting,
// ROUTES_DEPENDENCIES
}: RoutingProps) => {
  const router = express.Router();

  router.use("/users", usersRouting);
  router.use("/raffles", rafflesRouting);
// ROUTES_CONFIG
  return router;
};
