function encontrarProdutosComuns(listaA, listaB) {
  const setB = new Set(listaB);
  return listaA.filter(produto => setB.has(produto));
}

module.exports = encontrarProdutosComuns;
