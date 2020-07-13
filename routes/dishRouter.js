const express = require('express');
const bodyParser = require('body-parser');
// for cors...
const cors = require('./cors');
// for jsonwebtoken
var authenticate = require('../authenticate');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
	.all(function (req, res, next) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		next();
	})

	.get(function (req, res, next) {
		res.end('Will send all the dishes to you!');
	})

	.post(function (req, res, next) {
		res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
	})

	.delete(function (req, res, next) {
		res.end('Deleting all dishes');
	});

dishRouter.route('/:dishId')
	.all(function (req, res, next) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		next();
	})

	.get(function (req, res, next) {
		res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
	})

	.put(function (req, res, next) {
		res.write('Updating the dish: ' + req.params.dishId + '\n');
		res.end('Will update the dish: ' + req.body.name +
			' with details: ' + req.body.description);
	})

	.delete(function (req, res, next) {
		res.end('Deleting dish: ' + req.params.dishId);
	});

exports.router = dishRouter;

// for jsonwebtoken...
dishRouter.route('/')


	.post(authenticate.verifyUser, (req, res, next) => {

	

	})

	.put(authenticate.verifyUser, (req, res, next) => {

	

	})

	.delete(authenticate.verifyUser, (req, res, next) => {

	

	});


dishRouter.route('/:dishId')


	.post(authenticate.verifyUser, (req, res, next) => {

	

	})

	.put(authenticate.verifyUser, (req, res, next) => {

	

	})

	.delete(authenticate.verifyUser, (req, res, next) => {

	

	});


dishRouter.route('/:dishId/comments')


	.post(authenticate.verifyUser, (req, res, next) => {

	

	})

	.put(authenticate.verifyUser, (req, res, next) => {

	

	})

	.delete(authenticate.verifyUser, (req, res, next) => {

	

	});


dishRouter.route('/:dishId/comments/:commentId')


	.post(authenticate.verifyUser, (req, res, next) => {

	

	})

	.put(authenticate.verifyUser, (req, res, next) => {

	

	})

	.delete(authenticate.verifyUser, (req, res, next) => {

	

	});

// for cors
dishRouter.route('/')
	.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
	.get(cors.cors, (req,res,next) => {
	
	})
	
	.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	})
	
	.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	
	})
	
	.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	
	})
	
	dishRouter.route('/:dishId')
	.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
	.get(cors.cors, (req,res,next) => {
	
	})
	
	.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	})
	
	.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	
	})
	
	.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	
	})
	
	dishRouter.route('/:dishId/comments')
	.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
	.get(cors.cors, (req,res,next) => {
	
	})
	
	.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	})
	
	.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	
	})
	
	.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	
	})
	
	dishRouter.route('/:dishId/comments/:commentId')
	.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
	.get(cors.cors, (req,res,next) => {
	
	})
	
	.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	})
	
	.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	
	})
	
	.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	
	
	})