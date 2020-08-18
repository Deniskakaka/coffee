import { Model } from "../../types";

export default abstract class AbstractCoffeeMachineDefault {
    protected title: string
    protected manufacturerCountry: string
    protected model: Model

    public constructor ( title: string, manufacturerCountry: string) {
        this.title = title
        this.manufacturerCountry = manufacturerCountry
    }
}