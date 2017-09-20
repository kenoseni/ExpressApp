const Router = require('express').Router
const router = Router();

const puppies = require('./puppies')
const Puppy = require('./db').Puppy

router.get('/', function(req, res) {
	Puppy.findAll({
		/*attributes: [
			'name'
		],
		where: {
			age: {
				//$between: [1, 6],
				//$eq: 5
			}
			
		} */
		offset: 2, limit: 2
	})
	.then((puppies) => {
		res.send(puppies)
	})
	
})
router.post('/', (req, res) => {
	const puppy = req.body;
	Puppy.create(puppy)
	.then((puppy) => {
		res.send(puppy)
	})
	.catch((error) => {
		throw Error('puppy was not created')
	})
	//puppies.push(puppy)

	
})
router.get('/:id', (req, res) => {
	//res.send(puppies[req.params.id] );
	//const query = req.query
	const id = req.params.id
	//const puppy = puppies[id]
	//Puppy.findById(id)
	Puppy.findOne({
		where: {
			id: req.params.id
		},
		attributes: [
			'favFood', ['age', 'name']
		]
	})
	.then((puppy) => {
		if(!puppy) {
			res.send('Not Found')
		} else {
			console.log(puppy.greet());
			res.send(puppy)
		}
		
	})
	.catch((err) => {
		console.error('Unable to find instance:', err)
	})
	//const responses = {};
	//Object.keys(query).forEach((key) => {
		//responses[key] = puppy[key]
	//})
	//res.send(responses)
})

module.exports = router