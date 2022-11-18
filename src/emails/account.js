const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "filipemferreira95@gmail.com",
    subject: "Thanks for joining us!",
    text: `Welcome to the app, ${name}.\n\nLet me know how you get along with the app.`,
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "filipemferreira95@gmail.com",
    subject: "Sad to see you leave.",
    text: `Goodbye, ${name}.\n\nIs there anything we could've done to have kept you on board?`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};
