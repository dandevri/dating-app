'use strict';
const express = require('express');
const router = express.Router();
var slug = require('slug');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/icebreaker', urlencodedParser, function (req, res) {
	if (!req.body) return res.sendStatus(400);
	res.send('welcome, ' + req.body.q1);
});

router.get('/icebreaker', (req, res) => {
	res.render('icebreaker');
});

// Routes
router.get('/', (req, res) => {
	res.render('index', {
		title: 'Dating app',
		users
	});
});

router.get('/users/:id', function (req, res) {
	const id = req.params.id;
	res.render('profile', {
		title: 'Profile',
		users,
		id
	});
});



// function add(req, res) {
// 	var id = slug(req.body.title).toLowerCase();

// 	data.push({
// 		id: id,
// 		title: req.body.title,
// 		plot: req.body.plot,
// 		description: req.body.description
// 	});

// 	res.redirect('/' + id);
// }
// // Data
// let data = [];



const users = [{
	'id': 1,
	'name': 'Leanne Graham',
	'username': 'Bret',
	'email': 'Sincere@april.biz',
	'address': {
		'street': 'Kulas Light',
		'suite': 'Apt. 556',
		'city': 'Gwenborough',
		'zipcode': '92998-3874',
		'geo': {
			'lat': '-37.3159',
			'lng': '81.1496'
		}
	},
	'phone': '1-770-736-8031 x56442',
	'website': 'hildegard.org',
	'company': {
		'name': 'Romaguera-Crona',
		'catchPhrase': 'Multi-layered client-server neural-net',
		'bs': 'harness real-time e-markets'
	}
}, {
	'id': 2,
	'name': 'Ervin Howell',
	'username': 'Antonette',
	'email': 'Shanna@melissa.tv',
	'address': {
		'street': 'Victor Plains',
		'suite': 'Suite 879',
		'city': 'Wisokyburgh',
		'zipcode': '90566-7771',
		'geo': {
			'lat': '-43.9509',
			'lng': '-34.4618'
		}
	},
	'phone': '010-692-6593 x09125',
	'website': 'anastasia.net',
	'company': {
		'name': 'Deckow-Crist',
		'catchPhrase': 'Proactive didactic contingency',
		'bs': 'synergize scalable supply-chains'
	}
}];

module.exports = router;


