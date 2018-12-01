const rimraf = require('rimraf')
const fs = require('fs')

exports.questions = [
	{
		type: 'confirm',
		name: 'eslint',
		message: 'Enable ESLint?',
		default: true
	}
];

exports.preprocess = function (answer) {
	console.log(process.cwd())
	console.log(fs.existsSync('./functions/.eslint.json'))
	if (!answer.eslint) {
		rimraf.sync('./functions/.eslint.json')
	}
}
