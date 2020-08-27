import { Model } from "../../types";
import query from 'graphql'
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
protected constructor ( title: string, manufacturerCountry: string) {
        this.title = title
        this.manufacturerCountry = manufacturerCountry
    }
}