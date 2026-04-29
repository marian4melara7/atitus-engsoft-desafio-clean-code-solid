class CalculadoraDePedido {
  calcularTotal(itens) {
    const totalBruto = itens.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );

    return totalBruto > 1000 ? totalBruto * 0.9 : totalBruto;
  }
}

class EmailService {
  enviarConfirmacao(email, pedidoId) {
    console.log(`Enviando e-mail para ${email} sobre o pedido ${pedidoId}...`);
  }
}

class SistemaDeVendas {
  constructor() {
    this.calculadora = new CalculadoraDePedido();
    this.emailService = new EmailService();
  }

  async processarVenda(pedido) {
    if (!pedido.itens?.length) {
      throw new Error("Pedido sem itens");
    }

    const total = this.calculadora.calcularTotal(pedido.itens);

    console.log(`Salvando pedido ${pedido.id}...`);
    this.emailService.enviarConfirmacao(pedido.clienteEmail, pedido.id);

    return {
      ...pedido,
      total,
      status: "pago"
    };
  }
}

module.exports = SistemaDeVendas;
