const express = require('express');
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/ProjectController');

const router = express.Router();

router.get('/', getProjects);          // GET all
router.post('/', createProject);      // POST new
router.put('/:id', updateProject);    // PUT update by ID
router.delete('/:id', deleteProject); // DELETE by ID

module.exports = router;
