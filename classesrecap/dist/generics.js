"use strict";
//const nums: number[] = [];
const nums = [];
const colors = [];
const inputEl = document.querySelector("#username");
const btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identityAny(item) {
    return item;
}
function identity(item) {
    return item;
}
identity(7);
identity("hello");
identity({ name: "Cat", breed: "breed" });
