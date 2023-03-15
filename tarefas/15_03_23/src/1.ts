import inquirer from 'inquirer'

{

    class Product {

        public name:string
        public price:number
        
        constructor(name:string, price: number){
            this.name = name
            this.price = price
        }

        priceTag(){
            console.log(this.price);
        }

    }

    class ImportedProduct extends Product{
        public customFree:number

        constructor( name: string, price: number, customFree: number){
            super(name, price)
            this.customFree = customFree
        }

        totalPrice(){

        }
    }

    class UsedProduct extends Product{

        public datadeFabrica:number

        constructor( name: string, price: number, datadeFabrica: number){
            super(name, price)
            this.datadeFabrica = datadeFabrica
        }
    }


    const produto = new ImportedProduct("seila", 32, 10)

    const prompt = async () => {
        await inquirer.prompt([{
            name: 'vezes', message: 'Insira quantos produtos voce quer inserir: '
        }]).then((result:any) => {
            for(let i = 0; i < result.vezes; i++){
                inquirer.prompt([{
                    name: 'tipo', message: 'Seu produto é importado ( y / n ):  '
                }]).then((result:any) => {
                    if(result.tipo === "y"){
                        inquirer.prompt([{
                            name: 'name', message: 'Nome do seu produto:  '
                        },{
                            name: 'price', message: 'Preço do seu produto:  '
                        },{
                            name: 'customFree', message: 'Taxa de importação (insira 0.10 = 10%):  '
                        },]).then((result) => {
                            
                        })
                    }else if(result.tipo === "n"){

                    }else{
                        console.log("Input errado")
                    }
                })
            } 
        }).catch((err:any) => {
            console.log(err);
        });
    }
    
    prompt()
}