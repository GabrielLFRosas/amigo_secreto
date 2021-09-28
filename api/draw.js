
module.exports = app => {
  const draw = async(_, res) => {
    try{
        const users = await app.persistence.user_repository.listAllUsers();
      
        if (!users) {
          res.status(400).send("Nao existem usuarios cadastrados")
        }

        let availableIds = users.map(u => u.id)
        
        users.forEach(user => {
          do {
            let randomIndex = Math.ceil(Math.random() * (availableIds.length - 1))

            if(availableIds[randomIndex] == user.id) {
              continue;
            }

            user.friend_id = availableIds[randomIndex]

            availableIds.splice(randomIndex, 1)

            app.persistence.user_repository.update(user);
            sendEmail(user, users.find(u => u.id == user.friend_id))
            break;
          } while (true)
        });
      
      return res.status(200).send()
    }
    catch {
      return res.status(500).send("Falhou")
    }
  }


  function sendEmail(user, secretFriend){
    // Use at least Nodemailer v4.1.0
    const nodemailer = require('nodemailer');
    
    // Generate SMTP service account from ethereal.email
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }
    
        console.log('Credentials obtained, sending message...');
    
        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });
    
        // Message object
        let message = {
            from: 'amigo@secreto.com',
            to: user.email,
            subject: 'Amigo secreto',
            text: `Ola ${user.name}! Seu amigo secreto e: ${secretFriend.name}`,
        };
    
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }
    
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });
  }
  
  return { draw }
}