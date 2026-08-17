function createCart() {
  let products = [];

  return {
    addProduct(product) {
      products.push(product);
    },

    removeProduct(productId) {
      products = products.filter(
        product => product.id !== productId
      );
    },

    getProducts() {
      return products;
    },
  };
}

const cart = createCart();

cart.addProduct({ id: 1, name: "Laptop" });
cart.addProduct({ id: 2, name: "Keyboard" });

console.log(cart.getProducts());



for (var i = 0; i < 3; i++){
    console.log(i)
}