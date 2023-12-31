"use strict";
// import multiply, { multiplyByTwo as mBy2, HelloWold } from "./multiply";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_total_amount_1 = require("./lib/calculate-total-amount");
const order_1 = require("./lib/order");
const shopping_cart_1 = require("./lib/shopping-cart");
// const a = 25;
// const b = 3;
// console.log(`${a} * ${b} = ${multiply(a, b)}`);
// console.log(mBy2(a));
// enum Color {
// 	Red = "r",
// 	Green = "g",
// 	Blue = "b",
// }
// let myFavColor: Color = Color.Blue;
// console.log(myFavColor);
// console.log(Color.Red, Color.Green, Color.Blue);
// console.log(Color["Blue"]);
// class Robot {
// 	//_name: string;
// 	_color!: string;
// 	static availableColors: string[] = ["Red", "Green", "Blue"];
// 	static isColorAvailable = (color: string) =>
// 		Robot.availableColors.includes(color);
// 	constructor(protected _name: string) {
// 		//this.name = name;
// 	}
// 	askName() {
// 		console.log("My name is " + this.name);
// 	}
// 	move(distance: number) {
// 		console.log(this.name + " moved " + distance + " meters");
// 	}
// 	set name(value: string) {
// 		this._name = "PREFIX_" + value;
// 	}
// 	get name() {
// 		return this._name + "_SUFFIX";
// 	}
// 	set color(color: string) {
// 		if (!Robot.isColorAvailable(color)) {
// 			throw new Error("Color " + color + " is not available");
// 		}
// 		this._color = color;
// 	}
// }
// class FlyingRobot extends Robot {
// 	jetPackSize: number;
// 	constructor(name: string, jetPackSize: number) {
// 		super(name);
// 		this.jetPackSize = jetPackSize;
// 	}
// 	move(distace: number) {
// 		console.log(this.name + " is flying");
// 		super.move(distace);
// 	}
// }
// const robot = new Robot("Axel");
// robot.askName();
// const flyingRobot = new FlyingRobot("Francisco Axel", 5);
// flyingRobot.move(500);
// console.log("Flying robot's jetpack size is " + flyingRobot.jetPackSize);
// flyingRobot.name = "Flying robot Axel";
// console.log("My name is " + flyingRobot.name);
// class Robotin {
// 	#name: string;
// 	private somePrivateField: string = "Private!!";
// 	constructor(name: string) {
// 		this.#name = name;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
// }
// class AdvancedRobot extends Robotin {
// 	#name: string;
// 	private somePrivateField: string = "Overridden Private!!";
// 	constructor(name: string) {
// 		super(name);
// 		this.#name = "Advanced " + name;
// 	}
// 	getAdvancedRobotName(): string {
// 		return this.#name;
// 	}
// }
// const robotin = new AdvancedRobot("Axel");
// console.log("Parent name: " + robotin.getName());
// console.log("subclass name: " + robotin.getAdvancedRobotName());
// console.log("private " + robotin.somePrivateField);
////////////////////////////////////////////////////////////////
const cart = new shopping_cart_1.ShoppingCart();
console.log("The cart's total is " + (0, calculate_total_amount_1.calculateTotalAmount)(cart));
const order = new order_1.Order();
console.log("The order's total is " + (0, calculate_total_amount_1.calculateTotalAmount)(order));
