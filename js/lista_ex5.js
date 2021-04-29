/*Faça um algoritmo onde tenha uma variável de memória para armazenar a descrição do produto (nome), outra para armazenar a  quantidade adquirida e outra para armazenar o preço
unitário. Calcular e imprimir o total (total = quantidade adquirida * preço unitário), o desconto e o total
a pagar (total a pagar = total - desconto), sabendo-se que:
- Se quantidade <= 5 o desconto será de 2%
- Se quantidade > 5 e quantidade <=10 o desconto será de 3%
- Se quantidade > 10 o desconto será de 5%
*/
letnome = 'Lápis';
letqtd = 20;
letpreco = 1.50;
lettotalsemdesconto = qtd * preco;
letdesconto;
lettotalcomdesconto;
//respostas possíveis: 3 - 1 = 2 ifs
if (qtd <= 5) {​​​​​
    desconto = 2 / 100; //ou 0.02
}​​​​​
elseif(qtd > 5 && qtd <= 10)
    /* && - valor de curto-circuito para E
       pipe || valor de curto-circuito para ou*/
    {​​​​​
        desconto = 3 / 100;
    }​​​​​
else {​​​​​
    desconto = 5 / 100;
}​​​​​
totalcomdesconto = totalsemdesconto - totalsemdesconto * desconto;
/*                 1000        -  1000 * 5/100
                   1000        -  50 = 950    */
console.log("O produto " + nome + " resultou em um valor total de " + totalcomdesconto);