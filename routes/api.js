const apiController = require('../controller/apiController');
const router = require('express').Router();
const { uploadSingle } = require('../middleware/multer');

// router.get('/landing-page', apiController.landingPage);
router.post('/data', uploadSingle, apiController.postData);
router.get('/getData', apiController.getData);
module.exports = router;
