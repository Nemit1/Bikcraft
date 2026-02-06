//ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const href = link.href;
  const url = location.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// parametros url

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// galeria de imagens

const galerias = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function imagemClickar(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  console.log(media);
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function galeriaClick(clique) {
  clique.addEventListener("click", imagemClickar);
}

galerias.forEach(galeriaClick);

// animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
