import Mail from '../lib/mail';

export default {
    key: 'RegistrationMail',
    async handle ( { data } ){
        const { user } = data;
        await Mail.sendMail({
            from: 'Queue test <queue@queuetest.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro usuário',
            html: 'Bem vindo :D'
        })
    }
}