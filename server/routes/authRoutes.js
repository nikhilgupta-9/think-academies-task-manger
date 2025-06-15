const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { register, login, dashboard } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/dashboard', auth, dashboard);

module.exports = router;
