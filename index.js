import express from "express";
import dotenv from "dotenv";
import routes from "./openAiRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// "start": "nodemon index.js",
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/openAi", routes);

app.listen(port, () => console.log(`Server started on port ${port}`));
