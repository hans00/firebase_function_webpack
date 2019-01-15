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

exports.preprocess = function (answer, module) {
	if (!answer.eslint) {
		module.rm('./functions/.eslintrc.json');
	}
};
