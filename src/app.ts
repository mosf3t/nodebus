import express, { json, urlencoded, Response as ExResponse, Request as ExRequest } from "express";
import { RegisterRoutes } from "../build/routes";
import { UseGlobalErrorHandler } from "./error/global.error.handler";
import swaggerUi from "swagger-ui-express";

export const app = express();

// Use body parser to read sent json payloads
app.use(urlencoded({ extended: true }));

app.use(json());

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

RegisterRoutes(app);

UseGlobalErrorHandler(app);
