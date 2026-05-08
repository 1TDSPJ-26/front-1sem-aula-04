// //Comentário em linha
// /*
//     Comentário em bloco
// */

// //Forma de declaração de variáveis

// var nome = "Alê"; //Deve ser evitado
// let sobrenome = "C. de Jesus";//Deve ser utilizado
// // const idade = 20;//Constante, não pode ser alterada no fluxo do código

// //Exemplo da diferencia entre var e let

// if(true){
//     var nome = "Joaquim"; //Deve ser evitado
//     let sobrenome = "de Paula";//Deve ser utilizado
// }
// console.log(nome);
// console.log(sobrenome);
// // console.log(idade);


//Tipos de dados:
// const nome = "Alê";
// console.log(typeof nome);
// const idade = 20;
// console.log(typeof idade);
// const numeroDecimal = 20.345678910111;
// console.log(typeof numeroDecimal);
// const estaAprovado = true;
// console.log(typeof estaAprovado);
// const sobrenome = undefined;
// console.log(typeof sobrenome);
// let naoDeclarada;
// console.log(typeof naoDeclarada);
// const corSelecionada = null;
// console.log(typeof corSelecionada);
// const objeto = {};
// console.log(typeof objeto);
// const array = [];
// console.log(typeof array);
// const objeto2 = {nome: "Alê", sobrenome: "C. de Jesus"};
// console.log(typeof objeto2);
// const array2 = ["Alê", "C. de Jesus", 20, true];
// console.log(typeof array2);
// const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //Tipagem no JS é dinâmica
// let variavel;
// console.log("Valor: " + variavel);
// console.log("Tipo: " + typeof variavel);

// variavel = "Alê";
// console.log("Valor: " + variavel);
// console.log("Tipo: " + typeof variavel);

// variavel = true;
// console.log("Valor: " + variavel);
// console.log("Tipo: " + typeof variavel);


// //Como declaramos um Objeto em javaScript
// const objeto1 = {
//   nome: "Alê",
//   sobrenome: "C. de Jesus",
//   idade: 20,
//   estaAprovado: true
//   };
// console.log(objeto1);
// console.log(typeof objeto1);
 

// Lição de Casa:
// Crie um objeto que seja semelhante aos dados do formulário de login
// Imprmir os dados do objeto no console.


//Declarando um objeto espelhado ao FORMULÁRIO DE LOGIN

//Objeto Usuário:

// const usuario = { 
//   email:"email@email.com",
//   senha:"12345",
//   nome:"José das Couves",
//   idade:33,
//   avatar:"./img/avatar/img-avatar-01.jpg"
// }

// //Imprimindo os dados do objeto:
// console.log(usuario);
// console.table(usuario);

// //Imprimindo um único dado do objeto:
// console.log(usuario.nome);

// //Alterar um único dado do objeto:
// usuario.nome = "Antonio das Alfaces";
// //Imprimindo um único dado do objeto:
// console.log(usuario.nome);

// let nome = "Joaquim dos Tomates";
// //Alterar um único dado do objeto:
// usuario.nome = nome;
// //Imprimindo um único dado do objeto:
// console.log(usuario.nome);

// const subTitH2 = document.getElementById("teste");
// //Imprimeindo o elemento capturado:
// console.log(subTitH2);

// //Vamos escrever no h2
// // subTitH2.textContent = "<p>NOVO TEXTO</p>";
// subTitH2.innerHTML = "<p>novo texto</p>";


// const usuario = { 
//   email:"email@email.com",
//   senha:"12345",
//   nome:"José das Couves",
//   idade:33,
//   avatar:"./img/avatar/img-avatar-01.jpg"
// }

// //Capturando o elemento de avatar:
// const imgAvatar = document.getElementById("avatar-user");

// //Preenchendo o avatar com os dados do objeto usuário:
// imgAvatar.src = usuario.avatar;
// imgAvatar.width = 100;
// imgAvatar.alt = usuario.nome;


//Para casa:

//Recuperar os dados dos campos do FORM e armazenar em um objeto e imprimir eles assim que o botão Entrar for clicado!!