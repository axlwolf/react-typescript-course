import React from "react";
import CartCSS from "./Cart.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {}
interface State {
	isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isOpen: false,
		};

		//this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log(e);
		console.log(e.target);
		console.log(e.currentTarget);

		// if ((e.target as HTMLElement).nodeName === "SPAN") {
		// 	e.target as HTMLSpanElement;
		// }

		this.setState((prevState) => ({
			isOpen: !prevState.isOpen,
		}));
		console.log(this.state);
	};

	render() {
		return (
			<div className={CartCSS.cartContainer}>
				<button
					type="button"
					className={CartCSS.button}
					onClick={this.handleClick}
				>
					<FiShoppingCart />
					<span>2 pizzas(s)</span>
				</button>
				<div
					className={CartCSS.cartDropDown}
					style={{
						display: this.state.isOpen ? "block" : "none",
					}}
				>
					<ul>
						<li>Napoletana</li>
						<li>Marinara</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Cart;
