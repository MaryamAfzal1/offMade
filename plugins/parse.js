window.Parse = require('parse');

window.Parse.initialize("gqLpnv38QWkBXn1T4SEIWryP6nn4ZMqePbBLYfci", "ZDWQZuavO8IJEuqMld9DqNi9eSieh8FQnA7jVX1");
//javascriptKey is required only if you have it on server

window.Parse.serverURL = 'https://parseapi.back4app.com'
var GameScore = Parse.Object.extend("GameScore");

// Create a new instance of that class.
var gameScore = new GameScore();
