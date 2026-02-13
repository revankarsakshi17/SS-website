const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport(
    {
        secure:true,
        host:'smtp.gmail.com',
        port:465,
        auth:{
            user:"kiranruthalakiran@gmail.com",
            pass:"jmcpymqbwqnlxmyy"
        }
    }
)

function sendMail(to,sub,msg){
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    })
    console.log("email sending...")
}

const html=`
 <h1>hello world</h1>
  <p>this is paragraph</p>
`


sendMail("kiranruthala456@gmail.com","this is subject",html)

// module.exports = nodemailer