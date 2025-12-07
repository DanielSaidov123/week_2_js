import { add, sub, mul, div, pow, root } from "./utils/index.js";
import input from "analiza-sync";

function init() {
  const action = input("enter action you want: ");
  console.log(`1. add
2. sub
3. mul
4. div
5. pow
6. root`);
  const num1 = input("enter number1: ");
  const num2 = input("enter number2: ");

  if (action == "1") {
    console.log(add(Number(num1), Number(num2)));
  }
  if (action == "2") {
    console.log(sub(Number(num1), Number(num2)));
  }
  if (action == "3") {
    console.log(mul(Number(num1), Number(num2)));
  }
  if (action == "4") {
    console.log(div(Number(num1), Number(num2)));
  }
  if (action == "5") {
    console.log(pow(Number(num1), Number(num2)));
  }
  if (action == "6") {
    console.log(root(Number(num1), Number(num2)));
  }
}
init();
