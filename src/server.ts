import express from "express";
import cors from "cors";
import hbs from "hbs";
import dotenv from "dotenv";
import path from "path";
import indexRouter from "./routes/index";
import teamRouter from "./routes/team";

dotenv.config({ path: "./config/config.env" });

hbs.registerHelper("prettifyDate", function (timestamp: number) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(timestamp * 1000).toLocaleDateString("en-GB", options);
});

hbs.registerHelper("isNotNull", function (value: unknown) {
  return value !== null;
});

const app = express();

// Middleware
app.use(cors());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views/layouts/"));
hbs.registerPartials(path.join(__dirname, "../views/partials/"));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/api/v1/team", teamRouter);

const PORT = process.env.PORT || 4567;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
