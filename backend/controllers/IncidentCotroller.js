const Incident = require("../models/Incidents");
const User = require("../models/User");

exports.createIncident = async (req, res) => {
  try {
    const { userID, name, location, date, time, type, image } = req.body;
    if (!userID) {
      return res.status(400).json({ message: "Please provide userID" });
    }

    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newIncident = new Incident({
      name,
      location,
      date,
      time,
      type,
      image,
    });

    await newIncident.save();
    user.incidents.push(newIncident);
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteIncident = async (req, res) => {
  try {
    const { incidentID } = req.body;

    if (!incidentID) {
      return res.status(400).json({ message: "Please provide incidentID" });
    }

    const incident = await Incident.findById(incidentID);
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }

    // Delete the incident
    await Incident.findByIdAndDelete(incidentID);

    return res.status(200).json({ message: "Incident deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.updateIncident = async (req, res) => {
  try {
    const { userID, incidentID, name, location, date, time, type, image } =
      req.body;

    if (!userID) {
      return res.status(400).json({ message: "Please provide userID" });
    }

    if (!incidentID) {
      return res.status(400).json({ message: "Please provide incidentID" });
    }

    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const incident = await Incident.findById(incidentID);
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }

    // Update the incident with new data
    incident.name = name || incident.name;
    incident.location = location || incident.location;
    incident.date = date || incident.date;
    incident.time = time || incident.time;
    incident.type = type || incident.type;
    incident.image = image || incident.image;

    await incident.save();

    return res.status(200).json(incident);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.allIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();
    return res.status(200).json(incidents);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
