var express = require('express');
var router = express.Router();

var textinput_controller = require('../controllers/textinputController');


//multer object creation
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

// GET request for creating textinput. NOTE This must come before route for id (i.e. display textinput).
router.get('/', textinput_controller.upload_get);

// POST request for creating textinput.
router.post('/', upload.single('file-to-upload'), textinput_controller.upload_post);

module.exports = router;