import { Router } from "express";
import { healthCheck, rootMessage } from "../controllers/healthController.js";

const router = Router();

router.get("/", rootMessage);
router.get("/health", healthCheck);

export default router;
