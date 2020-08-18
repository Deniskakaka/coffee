import React from "react";
import { Link } from 'react-router-dom';
import CoffeeMachineFactory from "../../classes/coffeeMachineFactory/coffeeMachineFactory";
import CoffeeMachinStore from "../../classes/coffeeMachineStore/coffeeMachineStore";

import "./coffeeMachineOrder.scss";

export default class CoffeeSeller extends React.Component {

    state = {
        title: "",
        country: "China",
        model: "manual",
        milkFrother: true,
        material: "metal"

    }

    preventDefault(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    render() {
        const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ title: event.target.value })
        }
        const onChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ country: event.target.value })
        }
        const onChangeModel = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ model: event.target.value })
        }
        const onChangeMilkFrother = () => {
            this.setState({ milkFrother: !this.state.milkFrother })
        }
        const onChangeMaterial = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ material: event.target.value })
        }
        const createCoffeeMAchine = () => {
            let machine = new CoffeeMachineFactory(this.state.title, this.state.country, this.state.model === "manual" ? "manual" : "automatic");
            machine.setMaterial(this.state.material === "metal" ? "metal" : "plastic");
            machine.setmilkFrother(this.state.milkFrother);
            localStorage.setItem("orderUser", JSON.stringify(machine))
        }
        let seller = new CoffeeMachinStore().callSeller("Oleg","LittleCoffee",1)
        return (
            <>
                <div className="page">
                    <span>{seller.meeting()}</span>
                    <form onSubmit={this.preventDefault} className="formCreateMachine">
                        <label className="formCreateMachine__introduced">Title<input
                            type="text"
                            onChange={onChangeTitle}
                            value={this.state.title} />
                        </label>
                        <label className="formCreateMachine__introduced">Manufacturer country<input
                            type="text"
                            onChange={onChangeCountry}
                            value={this.state.country} />
                        </label>
                        <div className="formCreateMachine__chose">
                            <span>Model</span>
                            <label><input
                                type="radio"
                                value="manual"
                                className="model"
                                onChange={onChangeModel}
                                checked={this.state.model === "manual"} />Manual</label>
                            <label><input
                                type="radio"
                                value="automatic"
                                className="model"
                                onChange={onChangeModel}
                                checked={this.state.model === "automatic"} />Automatic</label>
                        </div>
                        <label className="formCreateMachine__introduced">Milk frother
                        <input
                                type="checkbox"
                                defaultChecked={this.state.milkFrother}
                                onChange={onChangeMilkFrother} />
                        </label>
                        <div className="formCreateMachine__chose">
                            <span>Material</span>
                            <label><input
                                type="radio"
                                value="plastic"
                                className="material"
                                onChange={onChangeMaterial}
                                checked={this.state.material === "plastic"} />Plastic
                        </label>
                            <label><input
                                type="radio"
                                value="metalic"
                                className="material"
                                onChange={onChangeMaterial}
                                checked={this.state.material === "metal"} />Metalic
                        </label>
                        </div>
                        <Link to="/order"><button type="submit" onClick={createCoffeeMAchine}>Order</button></Link>
                    </form>
                </div>
            </>
        )
    }
} 