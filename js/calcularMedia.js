    // Declaração da função que fará o calculo da média
function calcularMedia() {
    var nota1 = document.getElementById("notaN1").value;
    var nota2 = document.getElementById("notaN2").value;
    var nota3 = document.getElementById("notaN3").value;
    
    // Validar as notas para não aceitarem valores maiores que 10    
    if(nota1 >10) alert ("entrada inválida");
    if(nota2 >10) alert ("entrada inválida");
    if(nota3 >10) alert ("entrada inválida");
 
    
    // Calcular a média e inserir valor calculado na caixa de texto adequada:
    var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3
    document.getElementById("media").value = media
    
    // Escrever na página (usando conteiner span):
    document.getElementById("media").innerHTML = "A média é " + media + " .";
    
    // Para testes apenas:
    console.log(media.value);
    }

// validações
// 1ª - Preciso verificar se os dados são de fato do tipo integer (inteiro) e não do tipo string (texto).
// 2ª - Preciso verificar se o valor digitado é igual ou menor que 10. Nenhum nota poderá ser maior que 10.

// regra/lógica de negócio (que é basicamente o nosso sistema/programa/software)]
// 1ª - O sistema deve fornecer três campos (n1, n2 e n3) para que o usuário preencher.
// 2ª - O sistema deve ser capaz de capturar os valores dos campos e aplicar um calculo de média.
// 3ª - O sistema deve ser capaz de informar o resultado para o usuário/cliente na tela.