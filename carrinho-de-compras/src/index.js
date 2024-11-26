import * as cartService from "./service/cart.js"
import creatItem from "./service/item.js";

const myCart = [];
const myWhischList = [];

console.log("\e[31m----------*********--------*********-----\e[0m");
console.log(" Carrinho de compras.");

const item1 = await creatItem("cadeira", 101. , 1);
const item2 = await creatItem("faca", 10.3 , 1);


//adicionda dois itens  ao carrinho.
 await cartService.addItem(myCart, item1);
 await cartService.addItem(myCart, item2);
 await cartService.addItem(myCart, item2);
 await cartService.addItem(myCart, item2);

 await cartService.removeItem(myCart, item1, item2);

 await cartService.displayCart(myCart);

 //deletado dois itens do carrinho.
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name,);


 await cartService.calcularTotal(myCart);
