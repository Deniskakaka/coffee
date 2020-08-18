import AbstractCoffeeMachineDefault from "../abstractClassMachine/abstractClassMachine";
import { Model } from "../../types";

export default class CoffeeMachineDefault extends AbstractCoffeeMachineDefault {
    title: string
    manufacturerCountry: string
    model: Model
    
   constructor(title: string, manufacturerCountry: string, model: Model) {
       super(title,  manufacturerCountry)
       this.title = title
       this.manufacturerCountry = manufacturerCountry
       this.model = model
   }
}