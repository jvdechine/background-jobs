import nodemailer from 'nodemailer';
import mail from '../../config/mail';
import mailConfig from '../../config/mail';

export default nodemailer.createTransport(mailConfig);