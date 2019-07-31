function executar() {

    /**
     *  Tuple
     */

     //let nome: [string, string] = ["Eraldo", "Vicente"];

     //let eu: [string, number] = ["Eraldo", 29];
     
    /**
     *  Enum
     */

     //enum RGB {Red, Green, Blue}

     //let cor: RGB = RGB.Blue;
     //let nome: string = RGB[0];

     //vitoria = 3
     //empate = 1
     //derrota = 0

     //enum Pontos {Derrota = 0, Empate = 1, Vitoria = 3}
     
     //let resultado: Pontos = Pontos.Vitoria;
     
     /**
      *  Tipo "any"
      */

      let valor: any = "Eraldo";

      valor = 29;

    document.getElementById('info').innerHTML = valor;
}