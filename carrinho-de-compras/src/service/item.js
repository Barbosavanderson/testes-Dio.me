// cria item com subtotal correto
async function creatItem(name, price, quantity) {
    
    return {
name,
price,
quantity,
subTotal: () => (price * quantity).toFixed(2),// esse .toFixed(2) arredonda para que não fique numeros gigaste.
    
}
};

export default creatItem;
