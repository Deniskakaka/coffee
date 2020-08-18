import CoffeeMachineSeller from "../coffeeMachineSeller/sellerClass";

export default  class CoffeeMachinStore {
    private seller: CoffeeMachineSeller;

    public  callSeller(name: string, store: string, rank: number) {
       return  this.seller = new CoffeeMachineSeller(name, store, rank);
    }
}