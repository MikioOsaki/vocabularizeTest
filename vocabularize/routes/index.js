/* var express = require('express');
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


 */
var express = require('express');
var router = express.Router();

//multer object creation
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.single('imageupload'), function (req, res) {
  res.send("File upload sucessfully.");
});

module.exports = router;