module.exports = {
  path: '*',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Components/Error').default)
    })
  }
}