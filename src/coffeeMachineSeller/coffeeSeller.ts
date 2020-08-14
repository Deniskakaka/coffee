interface CoffeeMachinesSellerInterface {
    meeting() : string;   
}

export default class CoffeeMachineSeller implements CoffeeMachinesSellerInterface {

    private name : string
    private rank : string
    private store : string

   constructor (name: string, rank: string, store: string ) {
        this.name = name
        this.rank = rank
        this.store = store
   }

   public meeting () {
        return `Hello, my name is ${this.name}, welcome to ${this.store}, i'm ${this.rank}, let i help you to choose coffee machine?`
    }
}