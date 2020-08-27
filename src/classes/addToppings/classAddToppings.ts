class Toppings {
    protected apple = false;
    protected orange = false;
    protected banan = false;
}

export default class AddToppings extends Toppings{
    public apple = false
    public orange = false
    public banan = false

    public constructor (apple: boolean, orange: boolean, banan: boolean) {
            super()
            this.apple = apple
            this.orange = orange
            this.banan = banan

    }
   public addApple() {
       this.apple = true
   }

   public addOrange() {
       this.orange = true
   }

   public addBanan() {
       this.banan = true
   }

   public canceling() {
       this.apple = false;
       this.orange = false;
       this.banan = false;
   }
}