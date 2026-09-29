let price = 500;
let quantity = 3;

//console.log(`Total price: ${price * quantity} taka\npay the price to get it as your won`);


function getDiscountedPrice(price) {
    return price * 0.1;
}

console.log(`you saved: ${getDiscountedPrice(price)} taka\nYour total bill is: ${price * quantity - getDiscountedPrice(price)} taka`);

let stock = 1;

console.log(`Status: ${stock >0? 'In stock' + ' ' + stock : 'Out of stock'}`);