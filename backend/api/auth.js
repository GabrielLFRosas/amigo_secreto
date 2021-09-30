module.exports = app => {

    const signin = async (req, res) => {
        if(!req.body.email || !req.body.name) return res.status(400).send("Informe um nome/email")

        const user = await app.db('users')
                                .where({ email: req.body.email})
                                .first()

        if(!user) {
            app.db('users')
                .insert(user)
                .then( _ => res.status(200).send())
                .catch( err => res.status(400).status( err ))

            //return res.status(400).send("Usuario nao encontrado!")
        } else {
            return res.status(200).send()
            //console.log("logou")
        }

    }

    return { signin }
}
