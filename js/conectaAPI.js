async function listaProdutos() {
    const conexao = await fetch("https://challenge-alura-geek-tawny.vercel.app/");
    const conexaoConvertida = await conexao.json(); 
 
    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {
    const conexao = await fetch("https://challenge-alura-geek-tawny.vercel.app/",{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        
        body: JSON.stringify({
            nome: nome,
            preco: parseFloat(preco),
            imagem: imagem
        })
    })
    
    if (!conexao.ok){
        throw new Error ("Não foi possível enviar o produto");
    }
    const conexaoConvertida = await conexao.json();     
    
    return conexaoConvertida;
}

async function deletaProduto(id) {
    const conexao = await fetch(`https://challenge-alura-geek-tawny.vercel.app/produtos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


export const conectaApi = {
    listaProdutos,
    criaProduto,
    deletaProduto
}