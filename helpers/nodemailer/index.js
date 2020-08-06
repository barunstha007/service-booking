const { accepted_template, completed_template } = require("./template");
const nodemailer = require("nodemailer");

module.exports = {
  acceptedSendLink: function (full_name, email) {
    // mailgen template
    const template = accepted_template(full_name);
    var mailOptions = {
      to: email,
      subject: process.env.ACCEPT_TITLE,
      html: template,
    };
    var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });

    transport.sendMail(mailOptions, async function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    });
  },

  completedSendLink: function (full_name, email) {
    // mailgen template
    const template = completed_template(full_name);
    var mailOptions = {
      to: email,
      subject: process.env.COMPLETE_TITLE,
      html: template,
    };
    var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });

    transport.sendMail(mailOptions, async function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    });
  },
};
