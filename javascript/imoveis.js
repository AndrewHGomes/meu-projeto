import imoveis from "./objetos.js";

const sectionImoveis = document.querySelector("#section-imoveis");

const criarFullCardHTML = (imovel) => {
  const imagensHtml = imovel.maisImagens
    .map((url, index) => {
      const classeAtiva = index === 0 ? "active" : "";
      return `<img class="imagem-imovel ${classeAtiva}" src="${url}" alt="Imagem-Imóvel">`;
    })
    .join("");

  return `
    <div class="full-imovel" data-imovel-id="${imovel.id}">
      <div class="full-imagem">
          ${imagensHtml}
        <div class="setas">
          <i class="fa-solid fa-less-than"></i>
          <i class="fa-solid fa-greater-than"></i>
        </div>
      </div>
      <div class="full-descricao">
        <h3>${imovel.titulo}</h3>
        <p><i class="fa-solid fa-handshake"></i> ${imovel.contrato}</p>
        <p><i class="fa-solid fa-brazilian-real-sign"></i> ${imovel.preco}</p>
        <p><i class="fa-solid fa-location-dot"></i> ${imovel.localizacao}</p>
        <p><i class="fa-solid fa-bed"></i> ${imovel.quartos} quartos</p>
        <p><i class="fa-solid fa-bath"></i> ${imovel.banheiros} banheiros</p>
        <p><i class="fa-solid fa-house"></i> ${imovel.area}m</p>
        <p><i class="fa-solid fa-car"></i> Garagem com ${
          imovel.estacionamento
        } vagas</p>
        <p><i class="fa-solid fa-align-left"></i> ${imovel.fullDescricao}</p>
        <p><i class="fa-solid fa-star"></i> ${imovel.comodidades.join(", ")}</p>
      </div>
    </div>`;
};

const limite = 6;
const limiteVisivel = imoveis.slice(0, limite);

limiteVisivel.forEach((imovel) => {
  const html = criarFullCardHTML(imovel);
  sectionImoveis.insertAdjacentHTML("beforeend", html);
});

const cardsImoveis = document.querySelectorAll(".full-imovel");

cardsImoveis.forEach((card) => {
  const imagens = card.querySelectorAll(".imagem-imovel");
  const setaEsquerda = card.querySelector(".fa-less-than");
  const setaDireita = card.querySelector(".fa-greater-than");
  let indiceAtual = 0;

  function mostrarImagem() {
    imagens.forEach((imagem, index) => {
      if (index === indiceAtual) {
        imagem.style.display = "block";
      } else {
        imagem.style.display = "none";
      }
    });
  }

  setaDireita.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem();
  });

  setaEsquerda.addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem();
  });

  // Opcional: Para garantir que apenas a primeira imagem apareça no início
  mostrarImagem();
});
