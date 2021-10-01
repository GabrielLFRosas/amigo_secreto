module.exports = app => {
  const {exitsOrError} = app.api.validation

  const createUser = async(req, res) => {
    const user = { ...req.body }    
    try{
      exitsOrError(user.name, "Nome nao informado")
      exitsOrError(user.email, "E-mail nao informado")

      console.log("CREATE")
      // Valida se ja existe um usuario com o email cadastrado
      const userAlreadyExists = await app.persistence.user_repository.getByEmail(user.email);
 
      if (userAlreadyExists) {
        console.log("400")

        res.status(400).send("Usuario ja cadastrado")
      }
      console.log("aqui sim")
      const createdUser = app.persistence.user_repository.insert(user);
      console.log("aqui nao")
      res.status(200).send(createdUser);
      console.log("200")
    }
    catch(error) {
      console.log("500")
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