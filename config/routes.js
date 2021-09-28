module.exports = app => {
  app.route('/users')
      .post(app.api.user.createUser)
  app.route('/users/:id')
      .delete(app.api.user.deleteUser)
      .patch(app.api.user.updateUser)
  app.route('/draws')
      .post(app.api.draw.draw)
}