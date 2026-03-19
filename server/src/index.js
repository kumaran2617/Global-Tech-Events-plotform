import "dotenv/config";
import app from "./app.js";
import { getPort } from "./config/env.js";
import { connectDb } from "./config/db.js";

const PORT = getPort();

const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

start();
