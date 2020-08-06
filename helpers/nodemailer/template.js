var Mailgen = require("mailgen");

module.exports = {
  accepted_template: function (full_name) {
    var mailGenerator = new Mailgen({
      theme: "default",
      product: {
        // Appears in header & footer of e-mails
        name: process.env.COMPANY_NAME,
        link: process.env.APP_URL,
        // Optional product logo
        // logo: 'https://mailgen.js/img/logo.png'
      },
    });

    var email = {
      body: {
        name: full_name,
        intro:
          "You have received this mail to notify you that your servicing request has been accepted",
        action: {
          instructions:
            "Please click this button to check status on our website",
          button: {
            color: "#22BC66", // Optional action button color
            text: "Visit Site",
            link: "http://localhost:3000",
          },
        },
      },
    };

    const emailTemplate = mailGenerator.generate(email);
    return emailTemplate;
  },

  completed_template: function (full_name) {
    var mailGenerator = new Mailgen({
      theme: "default",
      product: {
        // Appears in header & footer of e-mails
        name: process.env.COMPANY_NAME,
        link: process.env.APP_URL,
        // Optional product logo
        // logo: 'https://mailgen.js/img/logo.png'
      },
    });

    var email = {
      body: {
        name: full_name,
        intro:
          "You have received this mail to notify you that your servicing has been completed",
        action: {
          instructions:
            "Please click this button to check status on our website",
          button: {
            color: "#22BC66", // Optional action button color
            text: "Visit Site",
            link: "http://localhost:3000",
          },
        },
      },
    };

    const emailTemplate = mailGenerator.generate(email);
    return emailTemplate;
  },
};
