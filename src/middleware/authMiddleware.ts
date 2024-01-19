import basicAuth from "basic-auth";

import { Request, Response, NextFunction } from "express";

interface User {
  name: string;
  pass: string;
}

const users: Record<string, User> = {
  admin: { name: "admin", pass: "password123" },
};

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = basicAuth(req);
  if (!user || !users[user.name] || users[user.name].pass !== user.pass) {
    res.set("WWW-Authenticate", "Basic realm=Authorization Required");
    return res.status(401).json({
      error: "Authentication failed",
      message: "Invalid username or password",
    });
  }
  next();
};

export default authMiddleware;
