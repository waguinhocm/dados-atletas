class Atletas{
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria(){
    if (this.idade >= 9 && this.idade < 12){
      return "Infantil";
    }
    if (this.idade >= 12 && this.idade < 14){
      return "Juvenil";
    }
    if (this.idade >= 14 && this.idade < 16){
      return "Intermediário";
    }
    if (this.idade >= 16 && this.idade < 31){
      return "Adulto";
    }
    else {
      return "Sem categoria";
    }; 
  }
  calculaIMC(){
    return this.peso / (this.altura * this.altura);
  }
  calculaMediaValida(){
    let notaOrdem = this.notas.sort((a, b) => a-b);
    let notaUtil = notaOrdem.slice(1, 4);
    let soma = notaUtil.reduce(function(total, atual){
        return total + atual
      }, 0);
    return soma / notaUtil.length;
  }
  obtemNomeAtleta(){
    return "Nome: "+ this.nome;
  }
  obtemIdadeAtleta(){
    return "Idade: "+ this.idade;
  }
  obtemPesoAtleta(){
    return "Peso: "+ this.peso;
  }
  obtemAlturaAtleta(){
    return "Altura: "+ this.altura;
  }
  obtemNotasAtleta(){
    return "Notas: "+ this.notas;
  }  
  obtemCategoria(){
    return "Categoria: "+atleta.calculaCategoria();
  }
  obtemIMC(){
    return "IMC: "+atleta.calculaIMC();
  }
  obtemMediaValida(){
    return "Média válida: "+atleta.calculaMediaValida();
  }
}

let atleta = new Atletas("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());
