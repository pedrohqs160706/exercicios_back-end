
var readline = require('readline')

var entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let resultado = 0;

    resultado = Number(resultado);
    peso = Number(peso);
    altura = Number(altura);

entradaDeDados.question('digite seu peso: ', function(pesoUsuario){
    let peso = pesoUsuario;    

entradaDeDados.question('digite sua altura: ', function(alturaUsuario){
    let altura = alturaUsuario;

    if(peso == '' || altura == ''){
        console.log('ERRO: digite um número válido');
    }else{
         resultado = (peso / altura)*2;
    }

    if(resultado <= 18,5 ){
        console.log('seu IMC é: ' + resultado + ' ...você está abaixo do peso')
    }else if(resultado > 18,5 && resultado < 24,9){
        console.log('seu IMC é: ' + resultado + ' ...peso correto')
    }else if(resultado >= 25 && resultado <= 29,9){
        console.log('seu IMC é: ' + resultado + ' ...você acima do peso(sobrepeso)')
    }else if(resultado >= 30 && resultado < 34,9){
        console.log('seu IMC é: ' + resultado + ' ...obesidade I')
    }else if(resultado >= 35 && resultado < 39,9){
        console.log('seu IMC é: ' + resultado + ' ...obesidade II')
    }else if(resultado >= 40){
        console.log('seu IMC é: ' + resultado + ' ...obesidade III')
    }

    })
})
