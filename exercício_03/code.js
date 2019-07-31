function executar() {
    //var valor = "Eraldo";
    /*
     O compilador TypeScript emite um erro ao tentar
     atribuir um number a uma variável que já foi inicializada
     com string
    */
    //valor = 43;
    /* Tipagem  com booleano */
    //let valor: boolean = false;
    /* '' com number */
    //let numero: number = 10;
    //let numero: number = 10.25; 
    //let numero: number = 0xA;
    //let numero: number = 0b1100100;
    //let numero: number = 0o144;
    /* Aceita aspas dupas ou simples */
    //let valor: string = 'Eraldo';
    //let valor: string = "Eraldo";
    //let first_name = 'Eraldo';
    //let full_name = first_name + " Vicente";
    /* Template string */
    //let full_name = `${first_name} Vicente`;
    /* Arrays */
    var nomes = ['Eraldo', 'Ana', 'Carlos'];
    var apelidos = ['Silva', 'Vicente', 'Oliveira'];
    /* Convertendo para string */
    document.getElementById('info').innerHTML = nomes[0] + " " + apelidos[1];
}
