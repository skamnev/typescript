"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const requestUser = "https://jsonplaceholder.typicode.com/users/1";
const requestAllUsers = "https://jsonplaceholder.typicode.com/users/1";
axios_1.default.get(requestUser).then((res) => {
    console.log("Woo!!!!");
    printUser(res.data);
}).catch((e) => {
    console.log("Error!!!!", e);
});
axios_1.default.get(requestAllUsers).then((res) => {
    console.log("Woo!!!!");
    res.data.forEach(printUser);
}).catch((e) => {
    console.log("Error!!!!", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
