const { Router } = require('express');
const { body } = require('express-validator');

const authControllers = require('../controllers/auth-controllers');

const router = Router();

router.get('/admin', authControllers.getAdminPage);

router.post('/admin', authControllers.postAdminData);

router.get('/admin/update/:productId', authControllers.getAdminUpdatePage);

router.post('/admin/update/:productId', authControllers.postAdminUpdateData);

router.get('/admin/remove/:productId', authControllers.getAdminRemoveData);

module.exports = router;
