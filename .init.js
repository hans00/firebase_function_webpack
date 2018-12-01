const rimraf = require('rimraf')
const fs = require('fs')
const path = require('path')

exports.questions = [
	{
		type: 'confirm',
		name: 'eslint',
		message: 'Enable ESLint?',
		default: true
	}
];

exports.preprocess = function (answer) {
	if (!answer.eslint) {
		rimraf.sync(path.join(__dirname, './functions/.eslint.json'))
	}
}
