import CoffeeMachineSeller from "../coffeeMachineSeller/sellerClass";
/**
 * @param  {string} name
 * @param  {string} store
 * @param  {number} rank
 */
export default  class CoffeeMachinStore {
    private seller: CoffeeMachineSeller;

    public  callSeller(name: string, store: string, rank: number) {
       return  this.seller = new CoffeeMachineSeller(name, store, rank);
    }
}