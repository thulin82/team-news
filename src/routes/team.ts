import { Router } from "express";
import {
  teamSearch,
  teamData,
  getSquad,
  getTransfers,
} from "../controllers/team";

const router = Router();

router.route("/teamsearch/:name").get(teamSearch);
router.route("/teamdata/:id").get(teamData);
router.route("/teamsquad/:id").get(getSquad);
router.route("/teamtransfers/:id").get(getTransfers);

export default router;
