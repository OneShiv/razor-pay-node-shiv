const RazorPay = require("razorpay");
const PRIVATE_KEY = require("./privatekey");
console.log(PRIVATE_KEY);
let instance = new RazorPay({
    key_id: 'rzp_test_dxT2YIs6XfkUJU',
    key_secret: PRIVATE_KEY
});
let timeStamp = Date.now();
let order = instance.orders.create({
    "amount": 100,
    "currency": "INR",
    "receipt": "Receipt #1",
});

order.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});