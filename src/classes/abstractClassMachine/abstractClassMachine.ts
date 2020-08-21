import { Model } from "../../types";
/**
 * @param  {string} title
 * @param  {string} manufacturerCountry
 */
export default abstract class AbstractCoffeeMachineDefault {
    protected title: string
    protected manufacturerCountry: string
    protected model: Model
/**
 * Creates an instance of abstract coffee machine default.
 * @param title 
 * @param manufacturerCountry 
 */
public constructor ( title: string, manufacturerCountry: string) {
        this.title = title
        this.manufacturerCountry = manufacturerCountry
    }
}