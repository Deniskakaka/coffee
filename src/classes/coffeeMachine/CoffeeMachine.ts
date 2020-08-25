import CoffeeMachineDefault from "../coffeeMachineDefault/coffeeMachineDefault";
import { Material } from "../../types";
import { Model } from "../../types";
/**
 * @param  {boolean} milkFrother
 */

export default class CoffeeMachine extends CoffeeMachineDefault{
    protected milkFrother : boolean
    protected material : Material
    
    public setmilkFrother(milkFrother: boolean) {
        this.milkFrother = milkFrother;
    }

    public setMaterial(material : Material) {
        this.material = material;
    }

    public coffeeMachine(title: string, manufacturerCountry: string, model: Model) {
        return new CoffeeMachineDefault(title, manufacturerCountry, model)
    }
}

