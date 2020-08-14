class CoffeeMachineSettings {
    milk: boolean
    model: string

    constructor(milk: boolean, typeCoffee: string) {
        this.milk = milk
        this.model = typeCoffee
    }
}

export default class CoffeeMachineUser extends CoffeeMachineSettings {

    defaultMilk: boolean = true
    defaultModel: string = ""

    public createOrder(milk: boolean, model: string) {
        return new CoffeeMachineUser(milk, model)
    }

    public save() {
        return new CoffeeMachineSettings(this.defaultMilk, this.defaultModel)
    }

    public restore(defaultSettings: CoffeeMachineSettings) {
        this.milk = defaultSettings.milk
        this.model = defaultSettings.model
    }
}