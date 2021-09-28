module.exports = app => {
  const {exitsOrError} = app.api.validation

  const createUser = async(req, res) => {
    const user = { ...req.body }    
    try{
      exitsOrError(user.name, "Nome nao informado")
      exitsOrError(user.email, "E-mail nao informado")

      // Valida se ja existe um usuario com o email cadastrado
      const userAlreadyExists = await app.persistence.user_repository.getByEmail(user.email);
 
      if (userAlreadyExists) {
        res.status(400).send("Usuario ja cadastrado")
      }

      const createdUser = await app.persistence.user_repository.insert(user);

      res.status(200).send(createdUser);
    }
    catch {
      return res.status(500).send()
    }
  }

  const deleteUser = async(req, res) => {
    req.params.id = parseInt(req.params.id)

    try{
      app.persistence.user_repository.deleteUser(req.params.id);

      res.status(204).send();
    }
    catch {
      return res.status(500).send()
    }
  }

  const updateUser = async(req, res) => {
    let user = { ...req.body }
    user.id = parseInt(req.params.id)

    try {
      if (!(user.name || user.email)) {
        res.status(400).send("Campos nao informados para update")
      }
    
      const response = await app.persistence.user_repository.update(user);

      return res.status(200).send(response);
    }
    catch {
      return res.status(500).send()
    }
  }

  return { createUser, deleteUser, updateUser }
}