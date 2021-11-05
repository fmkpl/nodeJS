const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "efimberg22@gmail.com",
    pass: "LLW-XNG-Nny-3Gw",
  },
});

function send(mail) {
  const option = {
    from: "efimberg22@gmail.com",
    to: "efimkopyltoppg@yandex.by",
    subject: "Send email function",
    text: mail,
  };

  transport.sendMail(option, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

module.exports = send;
