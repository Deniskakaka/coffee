import CoffeeMachineSettings from "../coffeeMachineSetting/coffeeMachineSetting";
/**
 * Coffee machine user
 */
/**
 * @param  {CoffeeMachineSettings} setting
 */
export default class CoffeeMachineUser extends CoffeeMachineSettings {
    private setting: CoffeeMachineSettings
    /**
     * Saves setting
     * @param setting 
     * @returns  
     */
    public saveSetting(setting: CoffeeMachineSettings) {
        return this.setting = setting
    }
    /**
     * Gets setting
     * @returns  
     */
    public getSetting() {
        return this.setting
    }
    /**
     * Restores coffee machine user
     * @param obj 
     */
    public restore(obj: CoffeeMachineSettings) {
        this.setting = obj
    }
}