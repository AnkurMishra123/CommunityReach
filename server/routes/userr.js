import express from "express";
import { verifyToken } from "../middleware/require_auth.js";
import {
  getUser,
  getUserComms,
  getUserBooks,
  addRemoveComms,
} from "../controllers/userc.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/comms", verifyToken, getUserComms);
router.get("/:id/books", verifyToken, getUserBooks);

/* UPDATE */
router.patch("/:uid/:commId", verifyToken, addRemoveComms);

export default router;