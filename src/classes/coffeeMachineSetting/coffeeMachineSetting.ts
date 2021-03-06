import { CoffeeType } from "../../types";
/**
 * @param  {boolean} coffeeWithMilk
 * @param  {CoffeeType} coffeeType
 */
export default class CoffeeMachineSettings {
    public coffeeWithMilk : boolean
    public coffeeType : CoffeeType

    public constructor (coffeeWithMilk : boolean, coffeeType: CoffeeType) {
        this.coffeeWithMilk = coffeeWithMilk
        this.coffeeType = coffeeType
    }
}