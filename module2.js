let cart = [
    { name: 'laptop', price: 50000, quantity: 1 },
    { name: 'mobile', price: 20000, quantity: 2 },
    { name: 'headphone', price: 5000, quantity: 3 },
];

let totalPrice = 0;
for (const item of cart) {

    totalPrice += item.price * item.quantity;
}
console.log(`Total price is ${totalPrice}  taka`);