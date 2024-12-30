# AluraGeek - Loja Virtual

Bem-vindo ao projeto **AluraGeek**, uma loja virtual desenvolvida para fãs de tecnologia e cultura geek! <br>
Este repositório contém o código-fonte de uma aplicação web que permite a visualização e o gerenciamento de produtos de forma dinâmica e acessível.
##

## 🖼️ Visualização do Projeto
![Tela do Projeto para PC](https://github.com/pgustavo23/Challenge-Alura-Geek/blob/master/imagensReadme/telaPC.png?raw=true)


## 📜 Funcionalidades

- **Visualização de produtos cadastrados:**
  - Exibição de cartões dinâmicos contendo o nome, preço e imagem de cada produto.
  
- **Cadastro de novos produtos:**
  - Formulário funcional para adicionar produtos, com validação dos campos.
  
- **Exclusão de produtos:**
  - Ícone de lixeira que permite remover produtos com um único clique.
  
- **Interface responsiva:**
  - Totalmente adaptada para diferentes dispositivos e tamanhos de tela.
  
- **Melhorias de acessibilidade:**
  - Implementação de atributos como `aria-label`, `aria-live` para leitores de tela.
##
## 💻 Conhecimentos Utilizados
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Acessibilidade](https://img.shields.io/badge/Acessibilidade-WCAG-brightgreen?style=for-the-badge)


Durante o desenvolvimento deste projeto, foram aplicados os seguintes conceitos e tecnologias:

### **HTML5**
- Uso semântico de tags como `<header>`, `<main>`, `<aside>` e `<footer>`.
- Boas práticas para estruturação de formulários e elementos interativos.

### **CSS3**
- Estilização moderna com foco em design responsivo.
- Importação de fontes customizadas do Google Fonts.
- Separação entre estilo e conteúdo para maior organização do projeto.

### **JavaScript (ES6)**
- Manipulação do DOM para:
  - Criação dinâmica de elementos (cartões de produtos).
  - Atualização de listas de produtos sem recarregar a página.
  - Implementação de validações e interações nos formulários.
  
- Organização do código com **módulos** para facilitar a manutenção.

### **Acessibilidade Web (WCAG)**
- Uso de atributos como `aria-label`, `aria-live` e `aria-hidden`.
- Criação de botões interativos acessíveis e melhorias gerais para leitores de tela.
##
## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/usuario/alura-geek.git

2. Tenha o **node.js** instalado, abra o terminal da IDE e digite o seguinte comando para inicializa-lo:
    ```bash
    npm init

4. Efetue a instalação do **json.server**:
   ```bash
   npm install json-server

5. Navegue até o diretório do projeto e execute o comando:
   ```bash
   json-server --watch db.json
   

7. Abra o arquivo ```index.html``` no navegador:
   - Utilize um servidor local como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para evitar problemas com arquivos estáticos.
##

## 🛍️ Produtos Cadastrados
Os produtos são exibidos de forma dinâmica através de cartões que mostram o nome, preço e imagem de cada item. <br>
A lista de produtos é atualizada em tempo real, permitindo que os usuários façam adições de novos produtos, ou exclusão dos que já existem através do ```Ícone da Lixeira``` presente em cada card de produto.
##
## ✏️ Formulário de Adição de Produto
O formulário de adição de produto permite que os usuários insiram o nome, preço e imagem do produto que desejam adicionar ao campo ```Meus Produtos!```. <br>
Além disso, ele possui validação para garantir que todos os campos sejam preenchidos corretamente.

![Formulario de adição de produtos](https://github.com/pgustavo23/Challenge-Alura-Geek/blob/master/imagensReadme/adicionarProdutos.png?raw=true)
![Formulario de adição de produtos](https://github.com/pgustavo23/Challenge-Alura-Geek/blob/master/imagensReadme/adicionarProdutosValidacao.png?raw=true)
