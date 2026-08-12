import { Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const RAPIDAPI_HOST = "divanscore.p.rapidapi.com";

function rapidApiHeaders() {
  return {
    "x-rapidapi-key": process.env.API_KEY,
    "x-rapidapi-host": RAPIDAPI_HOST,
  };
}

export const teamSearch = async (req: Request, res: Response) => {
  const opt = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/search`,
    params: { q: req.params.name, type: "teams" },
    headers: rapidApiHeaders(),
  };

  axios
    .request(opt)
    .then(function (response) {
      res.send({ success: true, data: response.data });
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const teamData = async (req: Request, res: Response) => {
  const opt = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/teams/detail`,
    params: { teamId: req.params.id },
    headers: rapidApiHeaders(),
  };

  axios
    .request(opt)
    .then(function (response) {
      res.send({ success: true, data: response.data });
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getSquad = async (req: Request, res: Response) => {
  const opt = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/teams/get-squad`,
    params: { teamId: req.params.id },
    headers: rapidApiHeaders(),
  };

  axios
    .request(opt)
    .then(function (response) {
      res.send({ success: true, data: response.data });
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getTransfers = async (req: Request, res: Response) => {
  const opt = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/teams/get-transfers`,
    params: { teamId: req.params.id },
    headers: rapidApiHeaders(),
  };

  axios
    .request(opt)
    .then(function (response) {
      res.send({ success: true, data: response.data });
    })
    .catch(function (error) {
      console.error(error);
    });
};
