const Project = require('../models/Project');

// GET all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new project
const createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT (update) project by ID   http://localhost
const updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated document
    );
    if (!updated) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE project by ID
const deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject
};
