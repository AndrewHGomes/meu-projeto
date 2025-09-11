const form = document.querySelector(".form-cadastro form");
const feedbackMessage = document.createElement("div");
feedbackMessage.id = "mensagem-feedback";
form.parentNode.insertBefore(feedbackMessage, form.nextSibling);

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const formData = new FormData(form);

  const dadosFormulario = {
    tipoImovel: formData.get("tipo-imovel"),
    tipoContrato: formData.get("tipo-contrato"),
    localizacao: formData.get("localizacao"),
    descricao: formData.get("descricao"),
    nome: formData.get("nome"),
    email: formData.get("email"),
    telefone: formData.get("telefone"),
  };

  if (
    !dadosFormulario.tipoImovel ||
    !dadosFormulario.tipoContrato ||
    !dadosFormulario.localizacao ||
    !dadosFormulario.nome ||
    !dadosFormulario.email ||
    !dadosFormulario.telefone
  ) {
    exibirFeedback("Por favor, preencha todos os campos obrigatórios.", "erro");
    return;
  }

  // Simula o envio dos dados. Em um projeto real, aqui você faria uma chamada de API.
  console.log("Dados do formulário enviados:", dadosFormulario);

  exibirFeedback(
    "Imóvel cadastrado com sucesso! Entraremos em contato em breve.",
    "sucesso"
  );

  form.reset();
});

// Função para exibir mensagem de feedback
const exibirFeedback = (mensagem, tipo) => {
  feedbackMessage.textContent = mensagem;
  feedbackMessage.className = `feedback-${tipo}`;
};
