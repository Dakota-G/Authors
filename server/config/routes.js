const logic = require('../controllers/logic')
module.exports = function(app) {
	app.get('/authors', (req, res) => {
		logic.readAll(req, res);
	}),
	app.get('/authors/:id', (req, res) => {
		logic.readOne(req, res);
	}),
	app.post('/authors', (req, res) => {
		logic.create(req, res);
	}),
	app.put('/authors/:id', (req, res) => {
		logic.update(req, res);
	}),
	app.delete('/authors/:id', (req, res) => {
		logic.destroy(req, res);
	}),
	app.put('/authors/:id/addBook', (req, res) => {
		logic.addBook(req, res);
	}),
	app.put('/authors/:id/removeBook', (req, res) => {
		logic.removeBook(req, res);
	})
}