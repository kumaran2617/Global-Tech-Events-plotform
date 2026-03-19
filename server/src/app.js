import express from "express";
import cors from "cors";
import { requestLogger } from "./middleware/requestLogger.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandlers.js";
import healthRoutes from "./routes/healthRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/", healthRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
