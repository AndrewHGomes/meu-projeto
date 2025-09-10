import imoveis from "./objetos.js";

const formFiltro = document.querySelector(".filtro-imoveis form");
const listaImoveis = document.querySelector("#lista-imoveis");

const criarCardImovelHTML = (imovel) => {
  const imagensHtml = imovel.maisImagens
    .map((url, index) => {
      const classeAtiva = index === 0 ? "active" : "";
      return `<img class="imagem-imovel ${classeAtiva}" src="${url}" alt="Imagem-Imóvel">`;
    })
    .join("");

  return `
  <div class="card-imovel-full" data-imovel-id="${imovel.id}">
    <div class="galeria-imagem">
      ${imagensHtml}
      <div class="setas">
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
    <div class="descricao-completa">
      <h3>${imovel.titulo}</h3>
      <p><i class="fa-solid fa-handshake"></i> ${imovel.contrato}</p>
      <p><i class="fa-solid fa-brazilian-real-sign"></i> ${imovel.preco}</p>
      <p><i class="fa-solid fa-location-dot"></i> ${imovel.localizacao}</p>
      <p><i class="fa-solid fa-bed"></i> ${imovel.quartos} quartos</p>
      <p><i class="fa-solid fa-bath"></i> ${imovel.banheiros} banheiros</p>
      <p><i class="fa-solid fa-house"></i> ${imovel.area}m²</p>
      <p><i class="fa-solid fa-car"></i> Garagem com ${
        imovel.estacionamento
      } vagas</p>
      <p><i class="fa-solid fa-align-left"></i> ${imovel.fullDescricao}</p>
      <p><i class="fa-solid fa-star"></i> ${imovel.comodidades.join(", ")}</p>
    </div>
  </div>`;
};

function renderizarImoveis(imoveisParaRenderizar) {
  listaImoveis.innerHTML = "";
  imoveisParaRenderizar.forEach((imovel) => {
    const html = criarCardImovelHTML(imovel);
    listaImoveis.insertAdjacentHTML("beforeend", html);
  });
  adicionarEventosGaleria();
}

function adicionarEventosGaleria() {
  const cardsImoveis = document.querySelectorAll(".card-imovel-full");
  cardsImoveis.forEach((card) => {
    const imagens = card.querySelectorAll(".imagem-imovel");
    const setaEsquerda = card.querySelector(".fa-chevron-left");
    const setaDireita = card.querySelector(".fa-chevron-right");
    const divImagem = card.querySelector(".galeria-imagem");
    let indiceAtual = 0;

    function mostrarImagem(indice) {
      imagens.forEach((imagem) => {
        imagem.style.display = "none";
        imagem.classList.remove("active");
      });
      if (imagens[indice]) {
        imagens[indice].style.display = "block";
        imagens[indice].classList.add("active");
      }
    }

    setaDireita.addEventListener("click", (event) => {
      event.stopPropagation();
      indiceAtual = (indiceAtual + 1) % imagens.length;
      mostrarImagem(indiceAtual);
    });

    setaEsquerda.addEventListener("click", (event) => {
      event.stopPropagation();
      indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
      mostrarImagem(indiceAtual);
    });

    divImagem.addEventListener("click", (event) => {
      if (!divImagem.classList.contains("ampliada")) {
        divImagem.classList.add("ampliada");
        document.body.classList.add("modal-open");
        document.addEventListener("click", fecharModalImagem);
      }
    });

    function fecharModalImagem(event) {
      if (
        divImagem.classList.contains("ampliada") &&
        !divImagem.contains(event.target)
      ) {
        divImagem.classList.remove("ampliada");
        document.body.classList.remove("modal-open");
        document.removeEventListener("click", fecharModalImagem);
      }
    }
    mostrarImagem(indiceAtual);
  });
}

function filtrarImoveis(evento) {
  evento.preventDefault();

  const contrato = formFiltro.querySelector('select[name="contrato"]').value;
  const cidade = formFiltro.querySelector('select[name="cidade"]').value;
  const tipoImovel = formFiltro.querySelector(
    'select[name="tipo-imovel"]'
  ).value;
  const ordenarPor = formFiltro.querySelector(
    'select[name="ordenar-por"]'
  ).value;

  let imoveisFiltrados = [...imoveis];

  if (contrato) {
    imoveisFiltrados = imoveisFiltrados.filter(
      (imovel) => imovel.contrato.toLowerCase() === contrato.toLowerCase()
    );
  }

  if (cidade) {
    imoveisFiltrados = imoveisFiltrados.filter(
      (imovel) => imovel.localizacao === cidade
    );
  }

  if (tipoImovel) {
    imoveisFiltrados = imoveisFiltrados.filter((imovel) =>
      imovel.titulo.toLowerCase().startsWith(tipoImovel.toLowerCase())
    );
  }

  // Lógica de ordenação corrigida para lidar com valores string ou number.
  if (ordenarPor === "Maior Preço") {
    imoveisFiltrados.sort(
      (a, b) =>
        parseFloat(String(b.preco).replace(/\D/g, "")) -
        parseFloat(String(a.preco).replace(/\D/g, ""))
    );
  } else if (ordenarPor === "Menor Preço") {
    imoveisFiltrados.sort(
      (a, b) =>
        parseFloat(String(a.preco).replace(/\D/g, "")) -
        parseFloat(String(b.preco).replace(/\D/g, ""))
    );
  } else if (ordenarPor === "Maior Área") {
    imoveisFiltrados.sort((a, b) => b.area - a.area);
  } else if (ordenarPor === "Menor Área") {
    imoveisFiltrados.sort((a, b) => a.area - b.area);
  }

  renderizarImoveis(imoveisFiltrados);
}

formFiltro.addEventListener("submit", filtrarImoveis);

document.addEventListener("DOMContentLoaded", () => {
  renderizarImoveis(imoveis);
});
