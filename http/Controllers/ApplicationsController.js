const ApplicationsController = {
	index: (req, res) => {
		res.json({ message: 'huie.io v1.0.0'})
			.status(200)
	}
}

module.exports = ApplicationsController