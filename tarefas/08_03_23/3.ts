{
    
    class ninja {

        public nome:string
        public qShuriken:number
        
        constructor(nome:string, qShuriken:number){
            this.nome = nome
            this.qShuriken = qShuriken
        }

        atirarShuriken(inimigo:any){
            console.log(`${this.nome} atirou shuriken`)
            this.qShuriken = this.qShuriken - 1
            console.log(`${this.nome} tem ${this.qShuriken} na bolsa`)
            inimigo.morreu()
        }
    }

    class inimigo {

        public nome:string
        public vivo:boolean = true
        
        constructor(nome:string){
            this.nome = nome
        }

        morreu(){
            this.vivo = false
            console.log(`${this.nome} morreu por ${ninja1.nome}`)
        }

    }

    const ninja1 = new ninja("Naruto", 10)
    const inimigo1 = new inimigo("Orochimaru")
    const inimigo2 = new inimigo("Sakura")
    ninja1.atirarShuriken(inimigo1)
    ninja1.atirarShuriken(inimigo2)
}