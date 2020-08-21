import CoffeeMachine from "../coffeeMachine/CoffeeMachine";
import { Model } from "../../types";
/**
 * @param  {string} title
 * @param  {string} manufacturerCountry
 * @param  {Model} model
 */
export default class CoffeeMachineFactory extends CoffeeMachine {
    private static seller: Object;

    public static getCoffeeMachineByOrder(title: string, manufacturerCountry: string, model: Model) {
        this.seller = new CoffeeMachine(title, manufacturerCountry, model)
        return this.seller;
    }
}