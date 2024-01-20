import express, { json } from "express";
// import { dotenv } from "dotenv";
import pkg from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import AnalyticRoutes from "./routes/AnalyticRoutes.js";
import AdminRoutes from "./routes/AdminRoutes.js";
import path from "path";
// Load environment variables with dotenv
// dotenv.config();
const { config } = pkg;
config();
// config();

// MongoDB connection
connectDB();

// Initialize the express app
const app = express();

// Add middlewares
app.use(json());
app.use(cors());
app.use(morgan("dev"));

// Add routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/inventory", inventoryRoutes);
app.use("/api/v1/analytic", AnalyticRoutes);
app.use("/api/v1/admin", AdminRoutes);

//static folder
// app.use(express.static(path.join(__dirname, "./client/build")));
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//static routes
app.get("*", function (req, res) {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
});
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(
    `Node server running in ${process.env.DEV_MODE} on port ${PORT}`.bgBlue
      .white
  );
});
