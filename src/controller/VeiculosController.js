const Veiculos = require("../model/Veiculos");

module.exports = {
  async vdestroy(req, res) {
    const { userId } = req.params;
    await Veiculos.destroy({ where: { id: userId } });
    return res.status(204).send();
  },
  async vupdate(req, res) {
    const { userId } = req.params;
    await Veiculos.update(req.body, { where: { id: userId } });
    return res.status(204).send();
  },
  async vlistOne(req, res) {
    const { userId } = req.params;
    const veiculoOne = await Veiculos.findOne({
      where: {
        id: userId,
      },
    });
    return veiculoOne
      ? res.status(200).json(veiculoOne)
      : res.status(204).send();
  },
  async vlist(req, res) {
    const veiculos = await Veiculos.findAll(); // LISTAR TODOS VEICULOS
    return veiculos.length > 0
      ? res.status(200).json(veiculos)
      : res.status(204).send();
  },
  async vstore(req, res) {
    try {
      const { marca, status, modelo, ano, km, cor, chassi, precoVenda } =
        req.body;

      const veiculo = await Veiculos.create({
        marca,
        modelo,
        ano, // Cadastro de funcionários
        km,
        cor,
        chassi,
        precoVenda,
        status,
      });

      return res.json(veiculo);
    } catch (error) {
      res.status(400).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },
};
