const Veiculos = require("../model/Veiculos");

module.exports = {
  async vdestroy(req, res) {
    const { userId } = req.params;
    await Veiculos.destroy({ where: { id: userId } });
    return res.status(204).send();
  },
  async venda(req, res) {
    try {
      const { veicId } = req.params;
      await Veiculos.update(req.body, { where: { id: veicId } });
      return res.status(204).send();
    } catch (error) {
      res.status(400).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },
  async reserva(req, res) {
    try {
      const { veicId } = req.params;
      await Veiculos.update(req.body, { where: { id: veicId } });
      return res.status(204).send();
    } catch (error) {
      res.status(400).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },
  async listStatus(req, res) {
    const { vstatus } = req.params;
    const veiculofilter = await Veiculos.findAll({
      where: {
        status: vstatus,
      },
    });
    return veiculofilter
      ? res.status(200).json(veiculofilter)
      : res.status(204).send();
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
    const veic = await Veiculos.findAll(); // LISTAR TODOS VEICULOS
    return veic.length > 0
      ? res.status(200).json(veic)
      : res.status(204).send();
  },
  async vstore(req, res) {
    try {
      const { marca, status, modelo, ano, km, cor, chassi, pcompra } = req.body;

      const veiculo = await Veiculos.create({
        chassi,
        marca,
        modelo,
        ano, // Cadastro de funcionários
        km,
        cor,
        pcompra,
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
