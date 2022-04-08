class Pessoa{
    idade: number;
    nome: string;

    constructor(idade: number, nome: string){
        this.idade = idade;
        this.nome = nome;
    }

    idade_meses(){
        return this.idade * 12
    }
}

let t1 = new Pessoa(55, "Juracir")
console.log(`Nome do funcionário: ${t1.nome}
                Idade: ${t1.idade}
                Idade em Meses: ${t1.idade_meses()}`)