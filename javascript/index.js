import imoveis from "./objetos.js";

const sessaoImoveis = document.querySelector("#sessao-imoveis");
const filtroSelect = document.querySelector("#filtro-imoveis");

const criarCardImovelHTML = ({
  titulo,
  localizacao,
  cidade,
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
      <div>
        <h3>${titulo}</h3>
        <p>Em ${cidade}</p>
      </div>
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

const filtrarEExibirImoveis = (filtro) => {
  let imoveisFiltrados = [];

  switch (filtro) {
    case "destaques":
      imoveisFiltrados = imoveis.filter((imovel) => imovel.destaque);
      break;

    case "mais-procurados":
      imoveisFiltrados = imoveis.filter((imovel) => imovel.maisProcurado);
      break;

    case "com-garagem":
      imoveisFiltrados = imoveis.filter((imovel) => imovel.estacionamento > 0);
      break;

    case "mais-quartos":
      imoveisFiltrados = imoveis.filter((imovel) => imovel.quartos > 2);
      break;

    case "mais-recentes":
      imoveisFiltrados = imoveis.sort(
        (a, b) => new Date(b.dataCadastro) - new Date(a.dataCadastro)
      );
      break;

    default:
      imoveisFiltrados = imoveis;
      break;
  }
  renderizarImoveis(imoveisFiltrados);
};

filtroSelect.addEventListener("change", (evento) => {
  const filtroSelecionado = evento.target.value;
  filtrarEExibirImoveis(filtroSelecionado);
});

document.addEventListener("DOMContentLoaded", () => {
  filtrarEExibirImoveis("destaques");
});
