const pkg = require('./package.json')

module.exports = {
  locals: {
    title: pkg.title,
    description: pkg.description,
  },
}
