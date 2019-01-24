
// Display Category create form on GET.
exports.textinput_create_get = function (req, res, next) {
    res.render('index', { title: 'Extract vocabulary from text' });
};

// Handle Category create on POST.
exports.textinput_create_post = [

       // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a category object with escaped and trimmed data.
        var bathingspot = new Bathingspot(
            { name: req.body.name }
        );
    }
];
