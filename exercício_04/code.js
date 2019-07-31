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
    var Pontos;
    (function (Pontos) {
        Pontos[Pontos["Derrota"] = 0] = "Derrota";
        Pontos[Pontos["Empate"] = 1] = "Empate";
        Pontos[Pontos["Vitoria"] = 3] = "Vitoria";
    })(Pontos || (Pontos = {}));
    var resultado = Pontos.Vitoria;
    document.getElementById('info').innerHTML = resultado.toString();
}
