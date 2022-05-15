const Func = require("../model/Func");

module.exports = {
  async list(req, res) {
    const funcs = await Func.findAll(); // LISTAR TODOS FUNCIONÁRIOS
    return res.json(funcs);
  },
  async store(req, res) {
    try {
      const { name, email, bio, cpf, avatar } = req.body;

      const func = await Func.create({
        name,
        email,
        bio, // Cadastro de funcionários
        avatar,
        cpf,
      });

      return res.json(func);
    } catch (error) {
      res.status(400).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },
};
