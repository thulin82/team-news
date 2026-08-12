import { Router, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.render("main");
});

router.get("/squad", (req: Request, res: Response) => {
  const id = req.query.id;

  const opt = {
    method: "GET",
    url: `http://localhost:4567/api/v1/team/teamsquad/${id}`,
  };

  axios
    .request(opt)
    .then(function (resp) {
      res.set("Content-Type", "text/html");
      res.render("squad", { squad: resp.data.data });
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/transfers", (req: Request, res: Response) => {
  const id = req.query.id;

  const opt = {
    method: "GET",
    url: `http://localhost:4567/api/v1/team/teamtransfers/${id}`,
  };

  axios
    .request(opt)
    .then(function (resp) {
      res.set("Content-Type", "text/html");
      res.render("transfers", { transfers: resp.data.data });
    })
    .catch(function (error) {
      console.error(error);
    });
});

export default router;
