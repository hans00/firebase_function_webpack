const context = require.context('.', true, /\.js$/)
const events = {}
context.keys().forEach(key => {
	events[key.slice(2,-3)] = context(key).default
})

module.exports = events