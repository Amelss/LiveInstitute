let age = prompt ('How old are you?');
if (age <= 18){
alert('Congratulations, you get a discount')

let price = prompt('What\'s the price of the item?');
console.log(price)
discount = 50;
let newPrice = Number(price);
let total = newPrice - discount;
result = 'You get to pay $ ${total} for this item'
console.log(result)
}
else {
    alert('Sorry you don\'t get a discount')
}

