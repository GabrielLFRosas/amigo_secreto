module.exports = app => {
  app.route('/users')
      .post(app.api.user.createUser)
      .get(app.api.user.listUsers)
  app.route('/users/:id')
      .delete(app.api.user.deleteUser)
      .patch(app.api.user.updateUser)
  app.route('/draws')
      .post(app.api.draw.draw)
}