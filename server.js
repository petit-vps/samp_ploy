const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Hello Dokploy</title>
      </head>
      <body style="font-family:Arial;text-align:center;padding:100px">
        <h1>Hello Dokploy ! 🚀</h1>
        <p>Mon premier déploiement fonctionne.</p>
        <p>Vous pouvez maintenant commencer à développer votre application.</p>
      </body>
    </html>
  `);
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Application démarrée sur le port ${port}`);
});
