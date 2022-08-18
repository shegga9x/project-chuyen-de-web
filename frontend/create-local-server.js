const { createServer: createHttpsServer } = require('https');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

if (!fs.existsSync('./certs/.capath')) {

  console.error(`To fix this error, run the command below:`);
  console.error(`→ MacOS: ${macOsCommand}`);
  console.error(`→ Linux: ${linuxCommand}\n`);
  process.exit();
}

app
  .prepare()
  .then(() => {
    const server = createHttpsServer(
      {
        key: fs.readFileSync('./certs/my_client.key'),
        cert: fs.readFileSync('./certs/my_client.pem'),
      },
      (req, res) => handle(req, res)
    );

    return server.listen(PORT, (err) => {
      if (err) throw err;

      console.log('> Ready on https://localhost:3000')
    });
  })
  .catch((err) => {
    console.error(err);
  });