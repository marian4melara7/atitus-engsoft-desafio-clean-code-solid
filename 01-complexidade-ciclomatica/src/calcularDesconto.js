const REGRAS = [
  {
    cond: (c, v) => c.tipo === 'premium' && v > 1000 && c.years > 5,
    desc: 0.20
  },
  {
    cond: (c, v) => c.tipo === 'premium' && v > 1000,
    desc: 0.15
  },
  {
    cond: (c, v) => c.tipo === 'premium' && v > 500,
    desc: 0.10
  },
  {
    cond: (c) => c.tipo === 'premium',
    desc: 0.05
  },
  {
    cond: (c, v) => c.tipo === 'gold' && v > 1000,
    desc: 0.10
  },
  {
    cond: (c) => c.tipo === 'gold',
    desc: 0.02
  }
];

function calcularDesconto(cliente, valor) {
  const regra = REGRAS.find(({ cond }) => cond(cliente, valor));
  const taxa = regra?.desc ?? 0;

  return valor * taxa;
}

module.exports = calcularDesconto;
