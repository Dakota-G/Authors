const mongoose = require('mongoose');
const Author = require('../models/schemas.js')
module.exports = {
	readAll: function(req, res) {
		Author.find()
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	readOne: function(req, res) {
		Author.findOne({_id: req.params.id})
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	update: function(req, res) {
		Author.findOneAndUpdate({_id: req.params.id}, req.body)
			.then(data => {
				data.save()
					.then(data => res.json({message: "Success!", results: data}))
					.catch(err => res.json({message: "Failed!", results: err}))
			})
	},
	create: function(req, res) {
		let author = new Author ();
		Author.create(req.body)
			.then(() => res.json({message: "Success!", created: true}))
			.catch(err => res.json(err));
	},
	destroy: function(req, res) {
		Author.deleteOne({_id: req.params.id})
			.then(() => res.json({message: "Success!", deleted: true}))
			.catch(err => res.json(err));
	},	
	addBook: function(req, res) {
		Author.findOneAndUpdate({_id: req.params.id}, {$addToSet: {books: req.body}})
			.then(data => {
				data.save()
					.then(data => res.json({message: "Success!", results: data}))
					.catch(err => res.json({message: "Failed!", results: err}))
			})
	},
	removeBook: function(req, res) {
		Author.findOneAndUpdate({_id: req.params.id}, {$pullOne: {books: req.body}})
			.then(data => {
				data.save()
					.then(data => res.json({message: "Success!", results: data}))
					.catch(err => res.json({message: "Failed!", results: err}))
			})
	},
}