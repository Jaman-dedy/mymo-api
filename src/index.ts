import express from "express";
import swaggerUi from "swagger-ui-express";
import helmet from "helmet";
import cors from "cors";
import authMiddleware from "./middleware/authMiddleware";
import { globalErrorHandler } from "./middleware/errorHandler";
import * as swaggerDocument from "./swagger.json";

import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(authMiddleware);
app.use(globalErrorHandler);
app.use("/api", routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to mymoria api" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

export default app;
