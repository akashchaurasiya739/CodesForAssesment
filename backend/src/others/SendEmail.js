// auth: {
//     user: 'akashchaurasiya739@gmail.com',
//     pass: 'sfwyaqrhxdiccfco',
// }

const nodemailer = require('nodemailer');
function SendMailFun(ToEmail, subject, body) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth:{
            user: 'akashchaurasiya739@gmail.com',
            pass: 'sfwyaqrhxdiccfco'
        },
        host: 'smtp.gmail.com'
    }); 

    let mailOptions = {
        from: 'akashchaurasiya739@gmail.com',
        to: `${ToEmail}`,
        subject: `${subject}`,
        text: `${body}`,    
        //html: "<b>"HTML BODY </b>,
    };
    transporter.sendMail(mailOptions, function (error,  msg){
        if (error) console.log("Error... : ", error);
        else console.log("Message... :" +msg.response);
    });
}

module.exports = SendMailFun;