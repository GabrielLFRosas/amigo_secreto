    module.exports = app => {
        const { existsOrError, notExistsOrError } = app.api.validation

        const save = (req, res) => {
            const group = { ...req.body }
            if(req.params.id) group.id = req.params.id

            try {
                existsOrError(group.name, "Nome nao informado")
            } catch(msg){
                return res.status(400).send(msg)
            }

            if(group.id){
                app.db('groups')
                    .update(group)
                    .where({id: group.id})
                    .then(_ => res.status(204).send())
                    .catch( err =>  res.status(500).send(err))
            } else {
                app.db('groups')
                    .insert(group)
                    .then( _ => res.status(204).send())
                    .catch( err => res.status(500).send(err) )
            }
        }
        
        return {save}

    }