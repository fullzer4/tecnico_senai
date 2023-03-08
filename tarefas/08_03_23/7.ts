{
    
    class Conta {

        public numero:number
        private titular:string
        protected valor:number
        
        constructor(numero:number, titular:string, valor:number = 0){
            this.numero = numero
            this.titular = titular
            this.valor = valor
        }
        
        sacar(valor){
            let taxa:number = 5
            let valorTotal:number = valor + taxa

            if(valorTotal <= this.valor){
                this.valor = this.valor - valorTotal
                console.log(`Saque efetuado com sucesso`);
            }else {
                console.log(`Saldo insuficiente`)
            }
        }

        depositar(valor){
            this.valor = this.valor + valor
        }

        versaldo(){
            console.log(`Seu saldo é: ${this.valor}`)
        }

    }

    const jose = new Conta(13431321, "fsfs",15)

    jose.versaldo()
    jose.sacar(10)
    jose.versaldo()
    jose.depositar(20)
    jose.versaldo()

}