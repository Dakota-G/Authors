const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
	firstName: { type: String, maxlength: [20, "First names cannot be more than 20 characters"] },
	lastName: { type: String, required: [true, "There must be a last name! If the author is mononymous, please enter their one name here"], minlength: [3, "Last names must be at least 3 characters long"], maxlength: [25, "The last name must be under 25 characters!"]},
	image: { type: String, required: [true, "Please add a picture URL!"] },
	books: [ {title: {type: String, required: true }}],
	upcomingBook: { type: String, required: false},
	}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema)