import CoffeeMachineSettings from "../coffeeMachineSetting/coffeeMachineSetting";

export default  class CoffeeMachineUser extends CoffeeMachineSettings{
    private setting: CoffeeMachineSettings
 
     public saveSetting(setting: CoffeeMachineSettings) {
         return this.setting = setting
     }
 
     public getSetting() {
         return this.setting
     }
 
     public restore(obj: CoffeeMachineSettings) {
         this.setting = obj
     }
 }