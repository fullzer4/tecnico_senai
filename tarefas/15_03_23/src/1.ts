import inquirer from 'inquirer'

{
    const produtos:any = []

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

    const prompt = async () => {
        await inquirer.prompt([{
            name: 'vezes', message: 'Insira quantos produtos voce quer inserir: '
        }]).then( async (result:any) => {
            for(let i = 0; i < result.vezes; i++){
                await inquirer.prompt([{
                    name: 'tipo', message: 'Seu produto é importado ( y / n ):  '
                }]).then(async (result:any) => {
                    if(result.tipo === "y"){
                        await inquirer.prompt([{
                            name: 'name', message: 'Nome do seu produto:  '
                        },{
                            name: 'price', message: 'Preço do seu produto:  '
                        },{
                            name: 'customFree', message: 'Taxa de importação:  '
                        },]).then( async (result) => {
                            const produto = new ImportedProduct(String(result.name), Number(result.price), Number(result.customFree))
                            produtos.push(produto)
                            console.log(produtos);
                        })
                    }else if(result.tipo === "n"){
                        await inquirer.prompt([{
                            name: 'name', message: 'Nome do seu produto:  '
                        },{
                            name: 'price', message: 'Preço do seu produto:  '
                        },{
                            name: 'date', message: 'Data do seu produto:  '
                        },]).then( async (result) => {
                            const produto = new UsedProduct(String(result.name), Number(result.price), Number(result.date))
                            produtos.push(produto)
                            console.log(produtos);
                        })
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