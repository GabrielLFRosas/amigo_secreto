module.exports = app => {
    async function getByEmail(email) {
        return await app.db
          .select('id', 'name', 'email', 'friend_id')
          .from('users')
          .where("email", email)
          .first();
    }

    async function insert(user) {
        return await app.db
            .insert(user)
            .into("users")
            .returning(['id', 'name', 'email'])
            .then(rows => {
                return rows[0];
            });
    }

    async function update(user) {
        return await app.db('users')
            .where({id: user.id})
            .update(user)
            .returning(['id', 'name', 'email'])
            .then(rows => {
                return rows[0];
            });
    }

    async function listAllUsers() {
        return await app.db
            .select('*')
            .from('users');
    }

    async function deleteUser(id) {
        return await app.db("users")
            .where({ id: id})
            .delete();
    }
    
    return {getByEmail, insert, listAllUsers, update, deleteUser}
}
