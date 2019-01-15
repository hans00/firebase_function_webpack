const execSync = require('child_process').execSync

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
	const rimraf = require('rimraf');
	if (!answer.eslint) {
		execSync('rm -rf ./functions/.eslintrc.json');
	}
};
