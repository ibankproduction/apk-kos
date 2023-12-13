const express = require("express");
const connection = require('../database/config');

module.exports.login = function (req, res) {
    console.log("login"); // Perbaiki di sini
    const users = 'SELECT * FROM users';
    console.log(users); // Perbaiki di sini

    connection.query(users, function (error, results) { // Perbaiki di sini
        if (error) {
            res.status(500).send(error.message);
        } else {
            res.redirect("/login")
        }
    });
};
