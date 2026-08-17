function processOrder() {
  var orderId = 101;
  let customerName = "Rahim";

  if (true) {
    var paymentStatus = "paid";
    let deliveryStatus = "pending";
  }

  console.log(orderId);
  console.log(customerName);
  console.log(paymentStatus); // print paid bcz var is functional scope
  console.log(deliveryStatus); // show ref error bcz let is block scope & can not declare or assign global variable
}

processOrder();