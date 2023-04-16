// Write your solution in this file!
var bestCustomer =undefined;
const leastFavoriteCustomer = 0;
var customerName  = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'customer';
    
}


console.log(customerName);
