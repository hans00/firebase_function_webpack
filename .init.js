const rimraf = require('rimraf')

exports.questions = [
	{
		type: 'confirm',
		name: 'eslint',
		message: 'Enable ESLint?',
		default: true
	},
	{
		type: 'input',
		name: 'description',
		message: 'Description of this project',
		default: ''
	}
];

exports.preprocess = function (answer) {
	if (!answer.eslint) {
		rimraf.sync('./functions/.eslintrc.json')
	}
}
