const nodemailer = require("nodemailer");
const {google} = require("googleapis");

const CLIENT_ID = `446719692960-1me0e2hhc5sknbabu9gk89mim32s143q.apps.googleusercontent.com`;

const CLIENT_SECRET = `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
`;
const REDIRECT_URI = `https://developers.google.com/oauthplayground`;
const REFRESH_TOKEN = `1//049lYN4YFrg08CgYIARAAGAQSNwF-L9IrhAT-OvqV3TmDutjA2IBaxxa8_HrYXGUcdJfG8AZZE0-HNbH8G4us8_25UtwtPVNrMds`;

const oauthclient = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauthclient.setCredentials({refresh_token: REFRESH_TOKEN});

async function sendMail(){ 
  try{
    const access_token = await oauthclient.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: "OAuth2",
        user:"abhilashpatel113@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: access_token
      }
    })

    const mailOpts = {
      from: "abhilashpatel113@gmail.com",
      to:"devendradhote179@gmail.com",
      subject: "hey hey",
      text: "aur bhai",
      html: "<h1>hello</h1>"
    }

    const result =await transport.sendMail(mailOpts);
    return result;
  }
  catch(err){
    return err;
  }
}

sendMail()
.then(result=>console.log("Email sent...", result))
.catch(error=> console.log(error.message)); 
