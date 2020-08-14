import React from "react";
import "./CoffeeOrder.scss";
import CoffeeMachineUser from "../coffeeMachineUser/coffeeMachineUser";
import Popap from "../popap/Popap";

export default class CoffeeOrder extends React.Component {

    state = {
        coffee: "espresso",
        typeCoffee: "ground",
        modelMachine: JSON.parse(localStorage.getItem("coffeeMachine")).model,
        milk: JSON.parse(localStorage.getItem("coffeeMachine")).milkFrother,
        well: false,
        broken: false
    }

    preventDefault(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    render() {
        const onChangeCoffee = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ coffee: event.target.value })
        }
        const onChangeTypeCoffee = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ typeCoffee: event.target.value })
        }
        const checkOrder = () => {
            let orderUser = new CoffeeMachineUser(this.state.milk, this.state.modelMachine)
            let defaultSettings = orderUser.save();
            if (this.state.milk && orderUser.model === "automatic" && this.state.typeCoffee === "ground" ||
                !this.state.milk && this.state.coffee === "espresso") {
                this.setState({ well: true });
                orderUser.restore(defaultSettings);
            }
            else {
                this.setState({ broken: true });
                orderUser.restore(defaultSettings);
            }
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
                                value="ground"
                                onChange={onChangeTypeCoffee}
                                checked={this.state.typeCoffee === "ground"} />Ground
                        </label>
                        <label>
                            <input
                                type="radio"
                                className="typeCoffee"
                                value="grain"
                                onChange={onChangeTypeCoffee}
                                checked={this.state.typeCoffee === "grain"} />Grain
                        </label>
                    </div>
                    <button onClick={checkOrder}>Create</button>
                </form>
                {this.state.well ? <Popap prop={true} /> : ""}
                {this.state.broken ? <Popap prop={false} /> : ""}
            </>
        )
    }
}
