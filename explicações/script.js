function fCep()   //assinatura da função
{
    //corpo da função

    //document.getElementById('id')
    let nossocep=document.getElementById('cep').value;
    //   +  concatenação
    //   1+2 =3
    //   '1'+'2'='12'
   //alert ("Estou no JS "+nossocep);
   //    nossocep=12121124
   nossocep=nossocep.replace(/^(\d{5})(\d{3})/,"$1-$2");
   //    nossocep=12121-124
   document.getElementById('cep').value=nossocep;
}
// função para inserir máscara num campo cpf
function fCpf() 
{
    let nossocpf=document.getElementById('cpf').value;
    //padrão  999.999.999-99
    nossocpf=nossocpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4");
    document.getElementById('cpf').value=nossocpf;
}

function fTelefone()
{
    let pais=document.getElementById('nr').value;
        
    //nosso alvo(target) - input
    let tel=document.getElementById('telefone').value;
    //padrão (11) 99999-9999
    //       d{2}  d{5}  d{4}

    tel=tel.replace(/^(\d{2})(\d{5})(\d{4})/,"($1) $2-$3");
    document.getElementById('telefone').value=pais+tel;
}

