var valorTotal=[0,0];
var valorProduto=[50.0,30.0];
var qtd=[0,0];


function adicionarItem(item){
    //Chamando o ID QUANTIDADE DO PRODUTO do CÓDIGO html
    var quantidade = document.getElementById('quantidade' + item);

    //Chamando o ID Total do produto no código html
    var total = document.getElementById('total' + item);
    
    //Somatório de quatidades do carrinho
    qtd[item] += 1;
    
    //Somatório de valores de acordo com a quantidade e valor unitário do produto
    valorTotal[item] = Number.parseFloat(valorProduto[item])*qtd[item];
    
    //Agora vamos alterar a DOM da quantiadde do item no ID quantidade
    quantidade.innerHTML = qtd[item];

    //Agora vamos alterar a DOM do valor total do item multiplicado pela quantidade
    //tofixed(2) valores financeiros com duas casas decimais
    total.innerHTML= valorTotal[item].toFixed(2);
    valorCompra()
}


function removerItem(item){

    if (qtd[item]>0){
        qtd[item]-=1;
        var quantidade=document.getElementById('quantidade' + item);
        var total = document.getElementById('total' + item);
        quantidade.innerHTML=qtd[item];
        valorTotal[item]=Number.parseFloat(valorProduto[item])*qtd[item];
        total.innerHTML=valorTotal[item].toFixed(2);
        valorCompra()
    }
  
}

function valorCompra(){
    
    var valorTotalCompra =document.getElementById('valorTotalCompra');
    var valor=0;

    // Pegar a quantidade de Valores totais encontrados na DOM e somar cada um deles
    // Caso você subtraia algum valor a função vai continuar a somar novamente o total do item 1 e o total do item 2 dando um novo valor menor
    // Agora é necessário colocar dentro de cada função criada seja na adição ou na subtração
    // Dessa forma ele atualizará o total automaticamente
    for(var i=0;i<valorTotal.length;i++){
        valor+=valorTotal[i];
    }

    valorTotalCompra.innerHTML=valor.toFixed(2);


}

