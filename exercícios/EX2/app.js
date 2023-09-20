var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do aluno(a): ', function(nomedoalunoUsuario){
    var aluno = nomedoalunoUsuario;
    let resultado;
    let aprovacao;

    entradaDados.question('Digite o nome do(a) prof: ', function(nomedoprofUsuario){
    var prof = nomedoprofUsuario;
    
    entradaDados.question('Digite o sexo do aluno(a): ', function(sexualidadeUsuario){
    var sexualidade = sexualidadeUsuario;

    entradaDados.question('Digite o sexo do(a) prof: ', function(sexualidadeprofUsuario){
    var sexualidadeprof = sexualidadeprofUsuario;

    entradaDados.question('Digite o nome da disciplina: ', function(disciplinaUsuario){
    var disciplina = disciplinaUsuario;

    entradaDados.question('Digite a nota do primeiro quadrimestre: ', function(nota1Usuario){
    var nota1 = nota1Usuario;

    entradaDados.question('Digite a nota do segundo quadrimestre: ', function(nota2Usuario){
    var nota2 = nota2Usuario;

    entradaDados.question('Digite a nota do terceiro quadrimestre: ', function(nota3Usuario){
    var nota3 = nota3Usuario;

    entradaDados.question('Digite a última nota do quadrimestre: ', function(nota4Usuario){
    var nota4 = nota4Usuario;

    resultado = Number(resultado);
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);
    nota4 = Number(nota4);

    if(nota1 < '0' && nota1 > '100' && nota2 < '0' && nota2 > '100' && nota3 < '0' && nota3 > '100' && nota4 < '0' && nota4 > '100'){
        console.log('ERRO: digite somente valores entre 0 e 100');
    }else if(nota1 == '' && nota2 == '' && nota3 == '' && nota4 && aluno == '' && prof == '' && sexualidade == '' && sexualidadeprof == '' && disciplina == ''){
        console.log('ERRO: insira números válidos');
    } 

    resultado = (nota1 + nota2 + nota3 + nota4)/4;

    if(resultado >= 70){
        aprovacao = 'aprovado';
    }else if(resultado < 50){
        aprovacao = 'reprovado';
    }else if(resultado >= 50 && resultado <= 70){
        aprovacao = 'exame';
    }

    console.log('Relatório do aluno: ');
    
  if(sexualidade == 'masculino' && sexualidadeprof == 'masculino'){
    console.log(' ');
    console.log('O aluno ' + aluno + ' foi ' + aprovacao + ' na disciplina ' + disciplina);
    console.log('Curso: ' + disciplina);
    console.log('Professor: ' + prof);
    console.log('Notas do aluno: '  +  nota1  + '| ' +  nota2  + '| ' +  nota3  + '| ' + nota4);
    console.log('Média final: ' + resultado + ', ' + aprovacao);
    console.log('Média final do Exame: ' + aprovacao);
  } else if(sexualidade == 'feminino' && sexualidadeprof == 'feminino'){
    console.log(' ');
    console.log('A aluna ' + aluno + ' foi ' + aprovacao + ' na disciplina ' + disciplina);
    console.log('Curso: ' + disciplina);
    console.log('Professora: ' + prof);
    console.log('Notas da aluna: '  +  nota1  + '| ' +  nota2  + '| ' +  nota3  + '| ' + nota4);
    console.log('Média final: ' + resultado + ', ' + aprovacao);
    console.log('Média final do Exame: ' + aprovacao);
  } else if(sexualidade == 'feminino' && sexualidadeprof == 'masculino'){
    console.log(' ');
    console.log('A aluna ' + aluno + ' foi ' + aprovacao + ' na disciplina ' + disciplina);
    console.log('Curso: ' + disciplina);
    console.log('Professor: ' + prof);
    console.log('Notas da aluna: '  +  nota1  + '| ' +  nota2  + '| ' +  nota3  + '| ' + nota4);
    console.log('Média final: ' + resultado + ', ' + aprovacao);
    console.log('Média final do Exame: ' + aprovacao);
 } else if(sexualidade == 'masculino' && sexualidadeprof == 'feminino'){
    console.log(' ');
    console.log('O aluno ' + aluno + ' foi ' + aprovacao + ' na disciplina ' + disciplina);
    console.log('Curso: ' + disciplina);
    console.log('Professora: ' + prof);
    console.log('Notas do aluno: '  +  nota1  + ' | ' +  nota2  + ' | ' +  nota3  + ' | ' + nota4);
    console.log('Média final: ' + resultado + ', ' + aprovacao);
    console.log('Média final do Exame: ' + aprovacao);
 } else if(sexualidade == 'feminino' && sexualidadeprof == 'masculino'){
    console.log('ERRO: digite um sexo para professor(a) ou aluno(a)')
 }
})
    })
        })
            })
                })
                    })
                        })
                            })  
                                })            