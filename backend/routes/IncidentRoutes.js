const express = require("express");
const {
  createIncident,
  deleteIncident,
  updateIncident,
  allIncidents,
} = require("../controllers/IncidentCotroller");

const router = express.Router();

router.post("/create", createIncident);
router.post("/delete", deleteIncident);
router.post("/update", updateIncident);
router.get("/all-Incidents", allIncidents);

module.exports = router;
