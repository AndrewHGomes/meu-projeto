import imoveis from "./objetos.js";

const sessaoImoveis = document.querySelector("#sessao-imoveis");
const filtroSelect = document.querySelector("#filtro-imoveis");

// Função para criar o HTML de um card de imóvel
const criarCardImovelHTML = ({
  titulo,
  localizacao,
  preco,
  quartos,
  banheiros,
  area,
  imagem,
}) => {
  const htmlString = `
    <div class="card-imovel">
      <div class="imagem-imovel">
        <img src="${imagem}" alt="Imagem do Imóvel">
      </div>
      <div class="info-imovel">
        <h3>${titulo}</h3>
        <p><i class="fa-solid fa-brazilian-real-sign"></i> ${preco}</p>
        <p><i class="fa-solid fa-location-dot"></i> ${localizacao}</p>
        <p><i class="fa-solid fa-bed"></i> ${quartos} quartos</p>
        <p><i class="fa-solid fa-bath"></i> ${banheiros} banheiros</p>
        <p><i class="fa-solid fa-house"></i> ${area}m²</p>
      </div>
      <a href="#" class="btn-detalhes">Ver Detalhes</a>
    </div>
  `;
  return htmlString.replace(/\s+/g, " ").trim();
};

// Função para renderizar os cards na página com base em uma lista de imóveis
const renderizarImoveis = (listaImoveis) => {
  sessaoImoveis.innerHTML = "";
  if (listaImoveis.length === 0) {
    sessaoImoveis.innerHTML =
      "<p>Nenhum imóvel encontrado para este filtro.</p>";
    return;
  }
  listaImoveis.forEach((imovel) => {
    const html = criarCardImovelHTML(imovel);
    sessaoImoveis.insertAdjacentHTML("beforeend", html);
  });
};

// Função para filtrar e renderizar imóveis
const filtrarEExibirImoveis = (filtro) => {
  let imoveisFiltrados = [];

  switch (filtro) {
    case "mais-procurados":
      imoveisFiltrados = imoveis.filter(
        (imovel) => imovel.visualizacoes > 1000
      );
      break;
    case "com-garagem":
      imoveisFiltrados = imoveis.filter((imovel) => imovel.garagem);
      break;
    case "mais-quartos":
      imoveisFiltrados = imoveis
        .sort((a, b) => b.quartos - a.quartos)
        .slice(0, 3);
      break;
    case "mais-recentes":
      imoveisFiltrados = imoveis
        .sort((a, b) => new Date(b.dataCadastro) - new Date(a.dataCadastro))
        .slice(0, 3);
      break;
    case "destaques":
    default:
      imoveisFiltrados = imoveis
        .filter((imovel) => imovel.destaque)
        .slice(0, 3);
      break;
  }
  renderizarImoveis(imoveisFiltrados);
};

// Event listener para o filtro de seleção
filtroSelect.addEventListener("change", (evento) => {
  const filtroSelecionado = evento.target.value;
  filtrarEExibirImoveis(filtroSelecionado);
});

// Ação inicial: exibir os destaques ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  filtrarEExibirImoveis("destaques");
});
