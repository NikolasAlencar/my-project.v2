const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const express = require("express");

const server = jsonServer.create();
const router = jsonServer.router("./database.json");
const userdb = JSON.parse(fs.readFileSync("./users.json", "UTF-8"));
const database = JSON.parse(fs.readFileSync("./database.json", "UTF-8"));
const options = JSON.parse(fs.readFileSync("./options.json", "UTF-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";

const expiresIn = "1h";

this.app = express();

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isAuthenticated({ usuario, senha }) {
  return userdb.users.find(
    (user) => user.usuario === usuario && user.senha === senha
  );
}

// check consult cliente
function getClientByCpf(cpf) {
  return database.clientes.find((cliente) => cliente.cpf == cpf);
}

function getClientByConta(conta) {
  return database.clientes.find((cliente) => cliente.conta == conta);
}

function getClientByCelular(celular) {
  return database.clientes.find((cliente) => cliente.celular == celular);
}

function getClientById(id) {
  return database.clientes.find((cliente) => cliente.id == id);
}

function getUserByName(name) {
  return userdb.users.find((user) => user.usuario == name);
}

function getUserByEmail(email) {
  return userdb.users.find((user) => user.email == email);
}

// função auxiliar pra consulta
function geraRetorno(param, res) {
  const status = 401;
  const message = "Dados não encontrados";
  param ? res.status(200).json(param) : res.status(status);
}

function geraRetornoUser(param, res) {
  const status = 201;
  const message = "Dados não encontrados";
  param ? res.status(200).json(param) : res.status(status);
}

// Login to one of the users from ./users.json
server.post("/auth/login", (req, res) => {
  const { usuario, senha } = req.body;
  if (isAuthenticated({ usuario, senha }) === undefined) {
    const status = 401;
    const message = "Usuário ou senha incorretos";
    res.status(status).json({ status, message });
  } else {
    const access_token = createToken({ usuario, senha });
    res.status(200).json({ access_token });
  }
});

//update
server.post("/update/client", (req, res) => {
  fs.readFile("./database.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    var data = JSON.parse(data.toString());
    index = data.clientes.findIndex(
      (cliente) => cliente.id === req.body.client.id
    );
    data.clientes[index] = req.body.client;
    fs.writeFile("./database.json", JSON.stringify(data), (error, result) => {
      if (error) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
        return;
      }
    });
  });
  res.status(200);
});

//register
server.post("/adicionar/novo-usuario", (req, res) => {
  const { usuario, senha, email } = req.body.user;

  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    // Get current users data
    var data = JSON.parse(data.toString());

    // Get the id of last user
    var last_item_id = data.users[data.users.length - 1].id;

    //Add new user
    data.users.push({ id: last_item_id + 1, usuario, senha, email }); //add some data
    fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {
      // WRITE
      if (err) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
        return;
      }
    });
  });
  const access_token = createToken({ usuario, senha });
  res.status(200).json({ access_token });
});

//get clients
server.post("/obter/clientes/cpf", (req, res) => {
  const client = getClientByCpf(req.body.cpf);
  geraRetorno(client, res);
});

server.post("/obter/clientes/conta", (req, res) => {
  const client = getClientByConta(req.body.conta);
  geraRetorno(client, res);
});

server.post("/obter/clientes/celular", (req, res) => {
  const client = getClientByCelular(req.body.celular);
  geraRetorno(client, res);
});

server.post("/obter/clientes/id", (req, res) => {
  const client = getClientById(req.body.id);
  geraRetorno(client, res);
});

//get users
server.post("/obter/user/nome", (req, res) => {
  const client = getUserByName(req.body.name);
  geraRetornoUser(client, res);
});

server.post("/obter/user/email", (req, res) => {
  const client = getUserByEmail(req.body.email);
  geraRetornoUser(client, res);
});

//get options
server.post("/obter/options/options-home", (req, res) => {
  res.status(200).json(options.optionsHome);
});

server.post("/obter/options/options-crivo", (req, res) => {
  res.status(200).json(options.optionsCrivo);
});

server.post("/obter/options/consultar-acoes", (req, res) => {
  res.status(200).json(options.consultarAcoes);
});

server.post("/obter/options/options-register", (req, res) => {
  res.status(200).json(options.optionsRegister);
});

server.post("/obter/options/options-sidenav", (req, res) => {
  res.status(200).json(options.optionsSidenav);
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(" ")[1]);

    if (verifyTokenResult instanceof Error && req.body.title !== "new-user") {
      const status = 401;
      const message = "Access token not provided";
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = "Error access_token is revoked";
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log("Run Auth API Server");
});
