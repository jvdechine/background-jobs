import redis from '../../config/redis';
import Queue from '../lib/Queue'

export default {
    async store(req, res){
        const { name, email, password } = req.body;

        const user = {
            name,
            email, 
            password
        }

        //Adicionar Job Registration Mail
        await Queue.add('RegistrationMail', { user });
        await Queue.add('UserReport', { user });

        return res.json(user);
    }
}