var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

    let resultado;
    let resultado2;

    entradaDeDados.question('Digite o valor inicial(entre 2 e 100) a ser calculado: ', function(valorinicialUsuario){
        var valorinicial = valorinicialUsuario;

    entradaDeDados.question('Digite o valor do contador inicial(entre 1 e 50) da primeira tabuada: ', function(contadorinicialUsuario){
        var contadorin1 = contadorinicialUsuario;

    entradaDeDados.question('Digite o valor do contador final da primeira tabuada: ', function(contadorfinal1Usuario){
        var contadorfin1 = contadorfinal1Usuario;

    entradaDeDados.question('Digite o valor final(entre 2 e 100) a ser calculado: ', function(valorfinalUsuario){
        var valorinicial2 = valorfinalUsuario;

    entradaDeDados.question('Digite o valor do contador inicial(entre 1 e 50) da segunda tabuada: ', function(contadorinicial2Usuario){
        var contadorin2 = contadorinicial2Usuario;
    
    entradaDeDados.question('Digite o valor do contador final da segunda tabuada: ', function(contadorfinal2Usuario){
        var contadorfin2 = contadorfinal2Usuario;
    
        valorinicial = Number(valorinicial);
        valorinicial2 = Number(valorinicial2);
        contadorin1 = Number(contadorin1);
        contadorin2 = Number(contadorin2);
        contadorfin1 = Number(contadorfin1);
        contadorfin2 = Number(contadorfin2);

    if(valorinicial == '' || contadorin1 == '' || contadorfin1 == '' || valorinicial2 == '' || contadorin2 == '' || contadorfin2 == ''){
        console.log('ERRO: insira números válidos')
    }

    while(contadorin1 <= contadorfin1){
        resultado = valorinicial * contadorin1;
        console.log($,{valorinicial} * $,{contadorin1} = $,{resultado});
        contadorin1++;
    }

    while(contadorin2 <= contadorfin2){
        resultado2 = valorinicial2 * contadorin2;
        console.log($,{valorinicial2} * $,{contadorin2} = $,{resultado2});
        contadorin2++;
    }
   
    })
        })
            })
                })
                    })
                        })
