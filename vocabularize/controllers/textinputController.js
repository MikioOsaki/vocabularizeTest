const express = require('express');

/* GET home page. */
exports.upload_get = function (req, res, next) {
    res.render('index', { title: 'Vocabularize' });
};

// Handle POST.
exports.upload_post = function (req, res) {

    var uploadExcel = req.file;    
    var buffer = uploadExcel.buffer + "yay!!";

    res.render('index', {  title: 'Vocabularize' , output: buffer });
};