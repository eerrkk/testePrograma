const db = require("../db");

module.exports = {
  listarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM produtos", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },
};
