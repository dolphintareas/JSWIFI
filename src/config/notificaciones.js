'use strict'

const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviar_mail = (pnombre) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }

    });

    let mail_options = {
        from: 'Noreplyl',
        to: 'woomclases2020@gmail.com',
        subject: 'Nueva tarea recibida',
        html: `
        <table border="0" cellpadding="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">

        <tr height="200px">
             <td bgcolor="" width="600px">
                <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                <p style="color: #fff; text-align:center">
                    <span style="color: #e84393">${pnombre}</span> subió una tarea
                </p>
             </td>
 
        </tr>
        <tr bgcolor="#fff">
            <td style="text-align:center">
                <p style="color: #000">Woom, estamos para ayudarte!</p>
            </td>
        </tr>
        </table>
        `
    };

    transporter.sendMail(mail_options, (error, info) =>{
        if(error){
            console.log('error encontradod')
            console.log(error);
        }else{
            console.log('El correo se envió correctamente' + info.response);
        }
    });
};

module.exports = this;