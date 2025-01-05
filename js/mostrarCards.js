import { conectaApi } from "./conectaAPI.js"

const lista = document.querySelector("[data-lista]");

export default function constroiCard(id, nome, preco, imagem) {
    const card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `
        <img class="card__imagem" src="${imagem}" alt="Imagem do produto">
        <div class="card-container--info">
            <p aria-label="Nome do produto">${nome}</p>
            <div class="card-container--value" aria-label="Preço do produto">
                <p>$ ${preco.toFixed(2)}</p>
                <img src="./assets/iconeLixeira.png" alt="Ícone de eliminação de produto" class="delete-icon">
            </div>  
        </div>
    `
    const btnExcluir = card.querySelector('.delete-icon');

    btnExcluir.addEventListener('click', async () => {
        try {
            await conectaApi.deletaProduto(id);
            card.remove();
        } catch (error) {
            console.error('Erro ao excluir produto: ', error);
        }
    });

    return card;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.id, elemento.nome, elemento.preco, elemento.imagem)));
    } catch {
        lista.innerHTML = `<div class="erro__container"><h2 class = "mensagem__titulo">Não foi possível carregar a lista de vídeos</h2></div>`
    }
}
listaProdutos();


