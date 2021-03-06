import React from "react";
import "./CoffeeOrder.scss";
import Popup from "../popup/Popup";
import CoffeeMachineUser from "../../classes/coffeeMachineUser/coffeeMachineUser";
import AddToppings from "../../classes/addToppings/classAddToppings";

export default class CoffeeOrder extends React.Component {

    state = {
        coffee: "espresso",
        typeCoffee: "cereal",
        milk: localStorage.getItem("orderUser") ? true : JSON.parse(localStorage.getItem("orderUser") as string).milkFrother,
        model: localStorage.getItem("orderUser") ? "automatic" :  JSON.parse(localStorage.getItem("orderUser")!).model,
        well: false,
        broken: false,
        toppping: new AddToppings(false,false,false)
    }

    preventDefault(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    render() {
        console.log(this.state.toppping)
        const onChangeCoffee = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ coffee: event.target.value })
        }
        const onChangeTypeCoffee = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ typeCoffee: event.target.value })
        }
        const createOrder = () => {
            let order = new CoffeeMachineUser(this.state.milk, this.state.typeCoffee === "cereal" ? "cereal" : "milled");
            let saveOrder = order.saveSetting(order);
            if (order.coffeeType === "milled" && this.state.model === "automatic") {this.setState({well : true})}
            if (this.state.coffee === "espresso" && this.state.milk === false) {this.setState({well : true})}
            if (order.coffeeType === "milled" && this.state.model === "manual") {this.setState({broken : true})}
            if (this.state.milk === false && this.state.coffee !== "espresso") {this.setState({broken : true})}
            if (this.state.model === "automatic" && order.coffeeType === "cereal") {this.setState({broken : true})}
        }
        return (
            <>
                <form onSubmit={this.preventDefault} className="formOrder">
                    <div>
                        <label className={this.state.coffee === "cappuchino" ? "cappuchino check" : "cappuchino"}>
                            <span>Cappuchino</span>
                            <input
                                type="checkbox"
                                value="cappuchino"
                                checked={this.state.coffee === "cappuchino"}
                                onChange={onChangeCoffee} />
                        </label>
                        <label className={this.state.coffee === "espresso" ? "espresso check" : "espresso"}>
                            <span>Espresso</span>
                            <input
                                type="checkbox"
                                value="espresso"
                                checked={this.state.coffee === "espresso"}
                                onChange={onChangeCoffee} />
                        </label>
                        <label className={this.state.coffee === "latte" ? "latte check" : "latte"}>
                            <span>Latte</span>
                            <input
                                type="checkbox"
                                value="latte"
                                checked={this.state.coffee === "latte"}
                                onChange={onChangeCoffee} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                className="typeCoffee"
                                value="cereal"
                                onChange={onChangeTypeCoffee}
                                checked={this.state.typeCoffee === "cereal"} />Cereal
                        </label>
                        <label>
                            <input
                                type="radio"
                                className="typeCoffee"
                                value="milled"
                                onChange={onChangeTypeCoffee}
                                checked={this.state.typeCoffee === "milled"} />Milled
                        </label>
                    </div>
                    <div>
                        <label>Apple<input type="checkbox" className="topping" onClick={() => this.state.toppping.addApple()}/></label>
                        <label>Orange<input type="checkbox" className="topping" onClick={() => this.state.toppping.addOrange()}/></label>
                        <label>Banan<input type="checkbox" className="topping" onClick={() => this.state.toppping.addBanan()}/></label>
                    </div>
                    <button onClick={createOrder}>Create</button>
                </form>
                {this.state.well ? <Popup prop={true} /> : ""}
                {this.state.broken ? <Popup prop={false} /> : ""}
            </>
        )
    }
}
