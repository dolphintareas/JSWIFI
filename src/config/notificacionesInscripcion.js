'use strict'

const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviar_mail = (pemail, pnombre) => {
    const email = pemail;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER1,
            pass: process.env.MAILPSSWD1
        },
        tls: {
            rejectUnauthorized: false
        }

    });

    let mail_options = {
        from: 'Noreplyl',
        to: email,
        subject: 'Te acabas de registrar al curso de Marvin Robot',
        html: `
        <table border="0" cellpadding="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">

        <tr height="200px">
             <td bgcolor="" width="600px">
                <h1 style="color: #fff; text-align:center">Bienvenido a Marvin Robot</h1>
                <p style="color: #fff; text-align:center">
                    <span style="color: #e84393"> ${pnombre} </span> estás registrado.
                </p>
             </td>
 
        </tr>
        <tr bgcolor="#fff">
            <td style="text-align:center">   
                <br>            
                Tema: Taller de Programación con Microcontroladores - Marvin Robot <br>
                Hora: 20 dic. 2020 05:00 p. m. Lima <br>
                
                Unirse a la reunión Zoom <br>
                https://us04web.zoom.us/j/76145044009?pwd=aEFrUFR5b29IMis4bk44SnJsUGNyQT09 <br>
                
                ID de reunión: 761 4504 4009 <br>
                Código de acceso: 1iTmCm </p>

                <br>  
                
            </td>
        </tr>
        <tr bgcolor="#fff">
            <td style="text-align:left">               
                <p style="color: #000">Temario del curso</p>
                <p style="color: #000">
                INTRODUCCIÓN - PIC C COMPILER <br>
                USO DE PROTEUS 8  <br>
                PRIMER HOLA MUNDO: ENCENDER Y APAGAR UN LED <br>
                USO DE DELAY CON PIC <br>
                TIPOS DE CLOCK (INTERNO, CRISTAL) <br>
                LABORATORIO 1: SECUENCIA DE LEDs <br>
                DISPLAY 7 SEGMENTOS CON PIC <br>
                MOTOR PASO A PASO – UNIPOLAR Y BIPOLAR <br>
                MULTIPLEXACION <br>
                INTERRUPCIONES – INTERNAS Y EXTERNAS <br>
                LABORATORIO 2: TECLADO MATRICIAL CON PIC <br>
                CONTROL DE DISPLAY LCD <br>
                </p>
                <p style="color: #000">
                Mas información en: <br>
                https://www.uwoom.com/cursos/inscripciones/MarvinRobot/cursoPicC 
                </p>
                
            </td>
        </tr>
        </table>
        `
    };

    transporter.sendMail(mail_options, (error, info) =>{
        if(error){
            console.log('error encontrado')
            console.log(error);
        }else{
            console.log('El correo se envió correctamente' + info.response);
        }
    });
};

module.exports = this;