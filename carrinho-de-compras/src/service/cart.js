/// açoes do carrinho


//adicionar itens carrinho
async function addItem(userCart, item) {
   userCart.push(item);
}
//calcular total
async function calcularTotal(userCart) {
   console.log(" \n Você me deve:");
   const result = userCart.reduce((total, item) => total + parseFloat(item.subTotal()), 0); 
   console.log(result.toFixed(2)); // Arredonda o resultado final para 2 casas decimais
   return result.toFixed(2);
 }
// remover um item do carrinho
async function removeItem(userCart, item ) {
   const indexFound = userCart.findIndex ((p) => p.name === item.name)
   console.log("item no index");
   console.log(indexFound);
   if (indexFound == -1)
      console.log(" não encontrado");
   return;

   if(userCart[indexFound].quantity > 1){
      userCart[indexFound].quantity -= 1;
      return;
   }

   if (userCart[indexFound].quantity == 1){
      userCart.splice(indexFound, 1);
   }
}


// excluir item do carrinho
async function deleteItem(userCart, name) {
   const index = userCart.findIndex((item)=> item.name === name);
if(index !== -1){
  userCart.splice(deleteIndex , 1);
}
}

async function displayCart(userCart) {
   console.log("\n Lista de compras do carrinho:")
   userCart.forEach((item, index) => {
console.log(`${index + 1}.${item.name} - R$ ${item.price}| ${item.quantity} x| Subtotal = ${item.subTotal()}`)
      
   });
}


export {
   addItem,
   calcularTotal,
   deleteItem,
   removeItem,
   displayCart
}