import * as express from "express";
import * as helmet from "helmet";
import * as cors from "cors";
import * as swaggerUi from "swagger-ui-express";
import jsdoc from "../tools/swagger";
import { MiddlewareType } from "../shared/middleware-type/middleware.type";
import * as path from "path";

export interface AppProps {
  router: express.Router;
  errorHandler: MiddlewareType;
}

function createApp({ router, errorHandler }: AppProps) {
  const app = express();

  app.use(express.static(path.join(__dirname, "../../static/")));

  app.use(cors());
  app.use(helmet());
  app.use(express.json());

  app.get("/health", (req, res) => {
    res.status(200).json({
      status: "200 - ok",
    });
  });

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(jsdoc));
  app.use("/api", router);

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../static/index.html"));
  });

  app.use(errorHandler);

  return app;
}

export { createApp };
