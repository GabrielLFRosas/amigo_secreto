module.exports = app => {
  app.post('/signup', app.api.user.save)
  app.post('/signin', app.api.auth.signin)

  app.route('/users')
      .post(app.api.user.save)
      .get(app.api.user.get)
  app.route('/users/:id')
      .put(app.api.user.save)
      .get(app.api.user.getById)
  app.route('/users/:email/groups')
      .get(app.api.groups.getGroupsByUser)
  app.route('/groups')
      .post(app.api.group.save)
}