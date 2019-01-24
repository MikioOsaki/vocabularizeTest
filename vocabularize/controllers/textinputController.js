const express = require('express');

/* GET home page. */
exports.upload_get = function (req, res, next) {
    res.render('index', { title: 'Extract vocabulary from text' });
};

// Handle POST.
exports.upload_post = function (req, res) {
    res.send("File upload sucessfully.");
};