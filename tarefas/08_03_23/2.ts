{
    
    class ninja {

        public nome:string
        public qShuriken:number
        
        constructor(nome:string, qShuriken:number){
            this.nome = nome
            this.qShuriken = qShuriken
        }

        atirarShuriken(){
            console.log(`${this.nome} atirou shuriken`)
            this.qShuriken = this.qShuriken - 1
            console.log(`${this.nome} temos ${this.qShuriken} na bolsa`)
        }
    }

    const ninja1 = new ninja("Naruto", 10)
    ninja1.atirarShuriken()

}