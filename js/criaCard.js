import { conectaApi } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarCard(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    
    try{
        await conectaApi.criaProduto(nome, preco, imagem);
    } catch (e) {
        alert('Por favor, recarregue a página para visualizar as alterações feitas!')
    }
}

formulario.addEventListener("submit", evento => criarCard(evento));
