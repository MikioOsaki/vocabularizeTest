var express = require('express');
var router = express.Router();

var textinput_controller = require('../controllers/textinputController');



// GET request for creating textinput. NOTE This must come before route for id (i.e. display textinput).
router.get('/index', textinput_controller.textinput_create_get);

// POST request for creating textinput.
router.post('/index/create', textinput_controller.textinput_create_post);


module.exports = router;
