abstract class coffeeMachineDefaults {
    title: string
    manufacturerCountry: string
    model: string

    constructor(title: string, manufacturerCountry: string, model: string) {
        this.title = title
        this.manufacturerCountry = manufacturerCountry
        this.model = model
    }
}

class CoffeeMachine extends coffeeMachineDefaults {
    milkFrother: boolean
    material: string

    public isThereAnyMilk(milkFrother: boolean) {
        this.milkFrother = milkFrother
    }

    public asMaterial(material: string) {
        this.material = material
    }
}

export default class CoffeeMachineFactory {
    public static getCooffeeMachineByOrder(title: string, manufacturerCountry: string, model: string){
        return  new CoffeeMachine(title, manufacturerCountry, model)
    }
}