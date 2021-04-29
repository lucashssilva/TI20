//estrutura de decisão: se.... senao....fimse
/*
if (teste lógico)
{
    comandos se teste lógico verdadeiro;
}
else
{
    comandos se teste lógico falso;
} 

operador de atribuição: =
operador de concatenaçao: + (js)  .(php)
operadores aritméticos: + - * / % (resto)
operadores relacionais: >  <  >=  <=  !=  ==  ===
! não   != não igual --> diferente
== comparação   'a' == 'a' -->true
                 1  == '1' -->true
                 1 === '1' -->false (número com string)
                
let valor=1;
valor=valor+1;
valor+=1;
valor++;   soma 1    valor-- subtrai 1
valor-=10;

*/
let valor=0;
valor+=5;
console.log("valor na linha 30: "+valor);

valor*=200;
console.log("valor na linha 33: "+valor);

//estrutura de decisão
valor=1001;
if (valor>1000)
{
    //ação que vamos fazer se valor >1000
    console.log("O valor é maior que 1000 - valor= "+valor);
}
else if (valor===1000) {
    console.log("O valor é igual a 1000 - valor= "+valor);
}
else {
    console.log("O valor é menor que 1000 - valor= "+valor);
}
console.log ("Agora estamos testando o programa com ifs simples");
valor=10000;
//if encadeado pode ser substituído por 3 ifs simples
if (valor>1000)
{
    //ação que vamos fazer se valor >1000
    console.log("O valor é maior que 1000 - valor= "+valor);
}

if (valor===1000)
{
    //ação que vamos fazer se valor >1000
    console.log("O valor é igual a 1000 - valor= "+valor);
}

if (valor<1000)
{
    //ação que vamos fazer se valor >1000
    console.log("O valor é menor que 1000 - valor= "+valor);
}
