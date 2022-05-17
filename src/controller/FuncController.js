const Func = require("../model/Func");

module.exports = {
  async destroy(req, res) {
    const { userId } = req.params;
    await Func.destroy({ where: { id: userId } });
    return res.status(204).send();
  },
  async update(req, res) {
    const { userId } = req.params;
    await Func.update(req.body, { where: { id: userId } });
    return res.status(204).send();
  },
  async listOne(req, res) {
    const { userId } = req.params;
    const funcOne = await Func.findOne({
      where: {
        id: userId,
      },
    });
    return funcOne ? res.status(200).json(funcOne) : res.status(204).send();
  },
  async list(req, res) {
    const funcs = await Func.findAll().catch((erro) => {
      console.log(erro);
    }); // LISTAR TODOS FUNCIONÁRIOS
    return funcs.length > 0
      ? res.status(200).json(funcs)
      : res.status(204).send();
  },
  async store(req, res) {
    try {
      const { name, email, bio, cpf, avatar, vendas } = req.body;

      const func = await Func.create({
        name,
        email,
        bio, // Cadastro de funcionários
        avatar,
        vendas,
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
