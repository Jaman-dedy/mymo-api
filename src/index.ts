import express from "express";
import swaggerUi from "swagger-ui-express";
import authMiddleware from "./middleware/authMiddleware";
import * as swaggerDocument from "./swagger.json";

import routes from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(authMiddleware);
app.use("/api", routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
