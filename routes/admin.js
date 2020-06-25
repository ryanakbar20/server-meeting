const router = require('express').Router();
const adminController = require('../controller/adminController.js');
const { uploadSingle, uploadMultiple } = require('../middleware/multer');

//endpoint Sign In
router.get('/', adminController.viewDashboard);
router.get('/table', adminController.viewTable);

module.exports = router;
