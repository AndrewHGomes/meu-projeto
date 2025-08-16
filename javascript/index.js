import imoveis from "./objetos.js";

const sessaoImoveis = document.querySelector("#sessao-imoveis");

const criarCardImovelHTML = ({
  titulo,
  localizacao,
  preco,
  quartos,
  banheiros,
  area,
  imagem,
}) => `
  <div class="div-imovel">
    <div class="div-imagem">
      <img src="${imagem}" alt="Imagem-Imóvel">
    </div>
    <div class="div-descricao">
      <h3>${titulo}</h3>
      <p><i class="fa-solid fa-brazilian-real-sign"></i> ${preco}</p>
      <p><i class="fa-solid fa-location-dot"></i> ${localizacao}</p>
      <p><i class="fa-solid fa-bed"></i> ${quartos} quartos</p>
      <p><i class="fa-solid fa-bath"></i> ${banheiros} banheiros</p>
      <p><i class="fa-solid fa-house"></i> ${area}m</p>
    </div>
    <button>Ver Detalhes</button>
  </div>
`;

const limite = 6;

const limiteVisivel = imoveis.slice(0, limite);

limiteVisivel.forEach((imovel) => {
  const html = criarCardImovelHTML(imovel);
  sessaoImoveis.insertAdjacentHTML("beforeend", html);
});
