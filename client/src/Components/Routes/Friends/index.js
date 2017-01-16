module.exports = {
  path: 'friends',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Components/Friends').default)
    })
  }
}