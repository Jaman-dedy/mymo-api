import express from "express";
import passport from "passport";
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";

interface JwtPayload {
  sub: string;
}

const app = express();
const port = 3000;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "your-secret-key",
};

passport.use(
  new Strategy(jwtOptions, (jwtPayload: JwtPayload, done: VerifiedCallback) => {
    console.log("jwtPayload :>> ", jwtPayload);
    console.log("done :>> ", done);
    // Check if user exists and handle authentication logic
    // Example: User.findById(jwtPayload.sub, (err, user) => { ... });
  }),
);

app.use(passport.initialize());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
