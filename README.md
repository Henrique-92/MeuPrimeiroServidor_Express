# MeuPrimeiroServidor_Express
 Primeiro servidor usando o NodeJS com a framework Express. 

Segue tutorial:

- Ferramentas utilizadas
    - Editor de código (VSCode)
    - NodeJS
    - Git

1 - Intalação do NodeJS e GitBash
    - O link para download do Node https://nodejs.org/en/download/ e Git https://git-scm.com/downloads

2 - Crie uma pasta onde ficará os arquivos
    - Criei no desktop, e em seguia com o botão direito abri o Git. 

3 - Já com o Git executado e dentro da pasta executei:
    - npm init 
    - O comando irá fazer da sua pasta um projeto NodeJs
    - Informei apenas o Author e a Description
    - Ao verificar na pasta criada irá aparecer o arquivo packege do tipo JSON file. Isso quer dizer que houve sucesso. 

4 - Em seguida abra o editor de código (Vs Code)
    - Selecione a pasta do projeto
    - Crie um arquivo com o nome de sua preferência, eu dei o nome de "servidor.js".
    - Através do servidor.js será possível dar partida na criação do servidor. 

5 - Execute a framework Express na tela de comando do Git
    - npm install express --save
    - Assim será possível de forma mais rápida a configuração do servidor
    
6 - No arquivo "servidor.js" iremos subir e configurar o servidor
    - Utilizei o módulo do nodeJs chamado "http"
    - const http = ("http");

7 - Utilizei a mesma regra para chamar a framework Express
    - const express = ("express");

8 - Para subir o servidor utilizei a função "createServer" onde o servidor passado para ele será o Express, junto a com a outra função "listen"
    - http.createServer(express).listen(3000, () => console.log("Servidor rodando na porta 3000"));

9 - Em seguida defini a rota principal/raiz
    - Primeiro criar app função que o express possui
    - const app = express();
    - E finalizando a primeira rota 
    - app.get("/", function(req, res){
        res.send("<h1>Criação do Servidor com ExpressJs</h1>");
    });
