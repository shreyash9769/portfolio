const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const contactMessage = (email, name, message) => {
    sgMail.send({
        to: "shreyashadlinge@gmail.com",
        from: email,
        subject: `${name} sent you a message`,
        text: `${message}`
    })
}

module.exports = contactMessage