const { Router } = require('express');
const { body } = require('express-validator');

const authControllers = require('../controllers/auth-controllers');

const router = Router();

router.get('/admin', authControllers.getAdminPage);

router.post('/admin', authControllers.postAdminData);

module.exports = router;
