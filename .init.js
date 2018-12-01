const rimraf = require('rimraf')

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
		rimraf.sync('./functions/.eslintrc.json')
	}
}
