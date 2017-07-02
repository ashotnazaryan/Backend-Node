module.exports = (app, db) => {

	const ref = db.ref('/data/dashboard');
	const cors = require('cors');
	const bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	
	app.post('/api/getPosts', cors(), (req, res) => {
		ref.orderByKey().once("value")
		.then((data) => {
			res.send(data.val());
		});
	});

	app.post('/api/setPost', cors(), (req, res) => {
		let postApi = ref.child("/posts/");
		console.log(req.body);
		postApi.push(req.body)
		.then(
			(data) => {
				res.send(data);
			},
			(error) => {
				res.send(error.code);
			}
		);
	});
};