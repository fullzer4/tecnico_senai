{

    class ninja {

        public nome:string
        
        constructor(nome:string){
            this.nome = nome
        }

        atirarShuriken(){
            console.log(`${this.nome} atirou shuriken`)
        }
    }

    const ninja1 = new ninja("Naruto")
    ninja1.atirarShuriken()

}