'use strict';

/**
 * Load modules
 */

var fs = require('fs');

/**
 * Create a data file to store users data
 * Only if it doesn't exist
 */

var usersPath = 'data/users.json';

fs.readFile(usersPath, function (err, data) {
	var users;

	// File doesn't exist
	if (err) {
		users = {
			'users': []
		};

		// Create the file (data must be a string)
		fs.writeFile(usersPath, JSON.stringify(users), function (err) {
			if (err) {
				console.log(err);
			}

			console.log('Write file successful: users.json');
		});
	}

	// File already exist, do nothing
});

module.exports = usersPath;
