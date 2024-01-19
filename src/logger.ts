// logger.ts
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "mymoria-api" },
  transports: [new winston.transports.Console()],
});

export default logger;
