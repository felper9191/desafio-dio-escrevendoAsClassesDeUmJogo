class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(tipoAtaque){
        console.log("o " + this.tipo + " " + this.nome + " atacou usando " + tipoAtaque + ".");
    }
}

let guerreiro1 = new Hero("Aragorn", 37, "guerreiro");
let guerreiro2 = new Hero("Boromir", 32, "guerreiro");
let mago1 = new Hero("Gandalf", 300, "mago");
let mago2 = new Hero("Saruman", 440, "mago");

guerreiro1.atacar("espada");
guerreiro2.atacar("espada");
mago1.atacar("magia");
mago2.atacar("magia");