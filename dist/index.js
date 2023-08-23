"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Robotin_name, _AdvancedRobot_name;
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = __importStar(require("./multiply"));
const a = 25;
const b = 3;
console.log(`${a} * ${b} = ${(0, multiply_1.default)(a, b)}`);
console.log((0, multiply_1.multiplyByTwo)(a));
var Color;
(function (Color) {
    Color["Red"] = "r";
    Color["Green"] = "g";
    Color["Blue"] = "b";
})(Color || (Color = {}));
let myFavColor = Color.Blue;
console.log(myFavColor);
console.log(Color.Red, Color.Green, Color.Blue);
console.log(Color["Blue"]);
class Robot {
    constructor(_name) {
        this._name = _name;
        //this.name = name;
    }
    askName() {
        console.log("My name is " + this.name);
    }
    move(distance) {
        console.log(this.name + " moved " + distance + " meters");
    }
    set name(value) {
        this._name = "PREFIX_" + value;
    }
    get name() {
        return this._name + "_SUFFIX";
    }
    set color(color) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error("Color " + color + " is not available");
        }
        this._color = color;
    }
}
Robot.availableColors = ["Red", "Green", "Blue"];
Robot.isColorAvailable = (color) => Robot.availableColors.includes(color);
class FlyingRobot extends Robot {
    constructor(name, jetPackSize) {
        super(name);
        this.jetPackSize = jetPackSize;
    }
    move(distace) {
        console.log(this.name + " is flying");
        super.move(distace);
    }
}
const robot = new Robot("Axel");
robot.askName();
const flyingRobot = new FlyingRobot("Francisco Axel", 5);
flyingRobot.move(500);
console.log("Flying robot's jetpack size is " + flyingRobot.jetPackSize);
flyingRobot.name = "Flying robot Axel";
console.log("My name is " + flyingRobot.name);
class Robotin {
    constructor(name) {
        _Robotin_name.set(this, void 0);
        this.somePrivateField = "Private!!";
        __classPrivateFieldSet(this, _Robotin_name, name, "f");
    }
    getName() {
        return __classPrivateFieldGet(this, _Robotin_name, "f");
    }
}
_Robotin_name = new WeakMap();
class AdvancedRobot extends Robotin {
    constructor(name) {
        super(name);
        _AdvancedRobot_name.set(this, void 0);
        this.somePrivateField = "Overridden Private!!";
        __classPrivateFieldSet(this, _AdvancedRobot_name, "Advanced " + name, "f");
    }
    getAdvancedRobotName() {
        return __classPrivateFieldGet(this, _AdvancedRobot_name, "f");
    }
}
_AdvancedRobot_name = new WeakMap();
const robotin = new AdvancedRobot("Axel");
console.log("Parent name: " + robotin.getName());
console.log("subclass name: " + robotin.getAdvancedRobotName());
console.log("private " + robotin.somePrivateField);
