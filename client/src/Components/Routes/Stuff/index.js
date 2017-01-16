module.exports = {
  path: 'stuff',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Components/Stuff').default)
    })
  }
}