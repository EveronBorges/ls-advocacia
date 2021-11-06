import axios from "axios";

const apiKey = process.env.REACT_APP_SENDINGBLUE_API_KEY;

export const SendMail = ({ nome, whatsapp, email, descricao }) =>
  new Promise((resolve) => {
    const headers = {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    };

    const html = `<html>
                     <head></head>
                     <body>
                     <p>
                     <b>NOME : </b> ${nome} <br />
                     <b>WHATAPP : </b> ${whatsapp} <br />
                     <b>E-MAIL : </b> ${email} <br />
                     <b>DESCRICAO : </b> ${descricao} <br />
                     </p>
                     </body>
                     </html>`;

    const body = {
      sender: {
        name: `${nome}`,
        email: `${email}`,
      },
      to: [
        {
          email: "agendacaxias@lsadvogados.com",
          name: "LS Advocacia",
        },
      ],
      subject: "CONTATO LS ADVOCACIA",
      htmlContent: `${html}`,
    };
    axios
      .post(`https://api.sendinblue.com/v3/smtp/email`, body, {
        headers: { ...headers },
      })
      .then((retorno) => {
        resolve(retorno);
      })
      .catch((reject) => {
        resolve(reject);
      });
  });
