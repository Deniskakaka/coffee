export default class CoffeeMachineSelle{
    private name: string
    private store: string
    private rank: number

    public constructor(name: string, store: string, rank: number) {
        this.name = name
        this.store = store
        this.rank = rank
    }

    public meeting() {
        return `Hello, my name is ${this.name}, welcome to ${this.store}, I'm ${
            this.rank
            }, let i help you to choose coffee machine?`
    }
}
