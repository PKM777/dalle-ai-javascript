import express from "express";

import { generator } from "./openAiPack.js";
const router = express.Router();

router.post("/imageGenerate", generator);

export default router;
