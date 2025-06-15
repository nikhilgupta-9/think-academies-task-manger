const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController'); 

router.post('/', auth, createTask);        // POST /api/tasks
router.get('/', auth, getTasks);           // GET /api/tasks
router.put('/:id', auth, updateTask);      // PUT /api/tasks/:id
router.delete('/:id', auth, deleteTask);   // DELETE /api/tasks/:id

module.exports = router;
