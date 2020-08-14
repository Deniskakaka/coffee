import CoffeeMachineSeller from "../coffeeMachineSeller/coffeeSeller";

export default class CoffeeMachineStore {
    
    public static seller: CoffeeMachineSeller

    private constructor() {}

    public static callSeller (name : string, rank : string, store : string) {
            return this.seller =  new CoffeeMachineSeller(name, rank, store)
    }
}