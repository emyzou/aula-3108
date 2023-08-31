*
//exercio 1.
 a) vai ser impresso 10 e 50.

 b) Não iria retornar nada.

 //exercicio 2.
 a) Essa função  dimiui as letras para minusculas e retorna se o texto que o usuário digitar tera
  a palavra "cenoura"

b)i - true
 ii.- false
 iii. - false

B. 1.a)

function infoSobreMim (){
    console.log("Eu sou a Emilly, tenho 16 anos, moro em São leopoldo e sou estudante.");
}

1.b)
function infoDeUmaPessoa(nome, idade, cidade, profissao) {
    nome = nome.toString();
    idade = Number(idade);
    cidade = cidade.toString();
    profissao = profissao.toString();
    return (" Eu sou " + nome + " tenho " + idade + " anos " + " moro em " + cidade + " e sou " + profissao);
    
}
 console.log(infoDeUmaPessoa(" Emilly", 16, " São Leopoldo", " estudante" ));

 /----------------///----------------

 -a do professor-

 function retornaInformaçoes (nome, idade, endereço, profissao){
    return " Eu sou " + nome + " tenho " + idade + " anos " + " moro em " + cidade + " e sou " + profissao
 }


 2.a)
 function numbers(num1, num2){
    return num1 + num2;
}


b)
function numbers(num1, num2){
   return (num1 >= num2);

}


c)
function numbers(num1){
  return(num1 %2===0);


  d)function tamanhoEMaiusculas(a){
      return a.length + " " + a.toUpperCase();
  }

 3.
 function soma (a, b){
return a + b;
}


function subtração (a, b){
  return a - b;
}

function multiplicação (a, b){
  return a * b;
}

function  divisão(a, b){
  return a / b;
}

let numero1 = Number(prompt("Digite um numero"));
let numero2 = Number(prompt("Digite outro numero"));
console.log(soma(numero1, numero2), subtração(numero1, numero2), multiplicação (numero1, numero2), divisão(numero1, numero2));
*/


