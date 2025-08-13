// Seus dados de imóveis permanecem os mesmos.
const imoveis = [
  {
    id: 1,
    titulo: "Algum titulo",
    descricao: "Descrição falando sobre o imóvel em questão",
    preco: 1234,
    localizacao: "Alguma descrição sobre a localização do imóvel",
    quartos: 3,
    banheiros: 2,
    area: 200,
    estacionamento: 2,
    imagem: "./assets/imoveis/property-1.jpg",
    fullDescricao:
      "sodvk spdvfsodvo kdjvoijfgijsodk jdivgjef ivjsfidjv ijd isdfvijsijdijj jsdvposjvf",
    comodidades: [
      "Piscina",
      "Academia",
      "Salão de Festas",
      "Portaria 24h",
      "Área Gourmet",
      "Playground",
    ],
  },
  {
    id: 2,
    titulo: "Algum titulo",
    descricao: "Descrição falando sobre o imóvel em questão",
    preco: 1234,
    localizacao: "Alguma descrição sobre a localização do imóvel",
    quartos: 3,
    banheiros: 2,
    area: 200,
    estacionamento: 2,
    imagem: "./assets/imoveis/property-2.jpg",
    fullDescricao:
      "sodvk spdvfsodvo kdjvoijfgijsodk jdivgjef ivjsfidjv ijd isdfvijsijdijj jsdvposjvf",
    comodidades: [
      "Piscina",
      "Academia",
      "Salão de Festas",
      "Portaria 24h",
      "Área Gourmet",
      "Playground",
    ],
  },
  {
    id: 3,
    titulo: "Algum titulo",
    descricao: "Descrição falando sobre o imóvel em questão",
    preco: 1234,
    localizacao: "Alguma descrição sobre a localização do imóvel",
    quartos: 3,
    banheiros: 2,
    area: 200,
    estacionamento: 3,
    imagem: "./assets/imoveis/property-3.jpg",
    fullDescricao:
      "sodvk spdvfsodvo kdjvoijfgijsodk jdivgjef ivjsfidjv ijd isdfvijsijdijj jsdvposjvf",
    comodidades: [
      "Piscina",
      "Academia",
      "Salão de Festas",
      "Portaria 24h",
      "Área Gourmet",
      "Playground",
    ],
  },
  {
    id: 4,
    titulo: "Algum titulo",
    descricao: "Descrição falando sobre o imóvel em questão",
    preco: 1234,
    localizacao: "Alguma descrição sobre a localização do imóvel",
    quartos: 3,
    banheiros: 2,
    area: 200,
    estacionamento: 2,
    imagem: "./assets/imoveis/property-1.jpg",
    fullDescricao:
      "sodvk spdvfsodvo kdjvoijfgijsodk jdivgjef ivjsfidjv ijd isdfvijsijdijj jsdvposjvf",
    comodidades: [
      "Piscina",
      "Academia",
      "Salão de Festas",
      "Portaria 24h",
      "Área Gourmet",
      "Playground",
    ],
  },
  {
    id: 5,
    titulo: "Algum titulo",
    descricao: "Descrição falando sobre o imóvel em questão",
    preco: 1234,
    localizacao: "Alguma descrição sobre a localização do imóvel",
    quartos: 3,
    banheiros: 2,
    area: 200,
    estacionamento: 2,
    imagem: "./assets/imoveis/property-2.jpg",
    fullDescricao:
      "sodvk spdvfsodvo kdjvoijfgijsodk jdivgjef ivjsfidjv ijd isdfvijsijdijj jsdvposjvf",
    comodidades: [
      "Piscina",
      "Academia",
      "Salão de Festas",
      "Portaria 24h",
      "Área Gourmet",
      "Playground",
    ],
  },
  {
    id: 6,
    titulo: "Algum titulo",
    descricao: "Descrição falando sobre o imóvel em questão",
    preco: 1234,
    localizacao: "Alguma descrição sobre a localização do imóvel",
    quartos: 3,
    banheiros: 2,
    area: 200,
    estacionamento: 2,
    imagem: "./assets/imoveis/property-3.jpg",
    fullDescricao:
      "sodvk spdvfsodvo kdjvoijfgijsodk jdivgjef ivjsfidjv ijd isdfvijsijdijj jsdvposjvf",
    comodidades: [
      "Piscina",
      "Academia",
      "Salão de Festas",
      "Portaria 24h",
      "Área Gourmet",
      "Playground",
    ],
  },
];

const sessaoImoveis = document.querySelector("#sessao-imoveis");

const criarCardImovelHTML = ({
  titulo,
  descricao,
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
      <p><i class="fa-solid fa-align-left"></i> ${descricao}</p>
      <p><i class="fa-solid fa-bed"></i> ${quartos} quartos</p>
      <p><i class="fa-solid fa-bath"></i> ${banheiros} banheiros</p>
      <p><i class="fa-solid fa-house"></i> ${area}m</p>
    </div>
  </div>
`;

const limite = 6;

const imoveisLimitados = imoveis.slice(0, limite);

imoveisLimitados.forEach((imovel) => {
  const html = criarCardImovelHTML(imovel);
  sessaoImoveis.insertAdjacentHTML("beforeend", html);
});
