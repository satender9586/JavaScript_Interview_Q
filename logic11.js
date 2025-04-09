// callback : jab kisi function pass karte kisi another punction ko, to us function ko callback function kahalte hai, callback
// function hi help se hum sabhi asyncronous operation perform kar sakte hai javascript ke under

// ex :-

function highOrderFunction(callback) {
  console.log("I am High Order function");
  setTimeout(() => {
    callback("I am call back funtion");
  }, 2000);
}

function childFun(data) {
  console.log("callback : ", data);
}

highOrderFunction(childFun)

//>>>>>>>>>>>>>>>>>>>>>>>>>>> another way to pass callback as argunment

highOrderFunction(function childFun(data) {
  console.log("callback : ", data);
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> callback hell
// jab kisi callback funtion ke under kisi another callback pass karte hai to usse callback hell bolte hai. esse code horzotially to
// vertically jata hai. jisse code ko maintain karne main dikkat aati hai

const cart = ["shoes", "pants", "wallet"];

function validate() {
  return true;
}

function createOrder(cardParam, callback) {
  if (validate(cardParam)) {
    console.log("order create successfully!");
    const orderId = 12345;
    setTimeout(() => {
      callback(orderId);
    }, 3000);
  }
}

function proceedToPayment(orderIdParam, callback) {
  if (orderIdParam) {
    console.log("payment succeed");
    const paymentID = "#12345";
    setTimeout(() => {
      callback(paymentID);
    }, 4000);
  }
}

function updateWallet(paymentIDParam) {
  if (paymentIDParam) {
    console.log("Walletupdate succesfully");
  }
}

createOrder(cart, function (orId) {
  proceedToPayment(orId, function (payId) {
    updateWallet(payId);
  });
});

