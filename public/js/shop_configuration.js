// invoke ready and pass in a callback function
ready(function() {

  console.log("Client script loaded.");

  // a function declaration inside of a callback ... which takes a callback function :O
  function ajaxGET(url, callback) {

    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        //console.log('responseText:' + xhr.responseText);
        callback(this.responseText);

      } else {
        console.log(this.status);
      }
    }
    xhr.open("GET", url);
    xhr.send();
  }

  ajaxGET("/shop-configuration-button?format=product", function(data) {
    document.querySelector("main").innerHTML = data;
    let products = document.getElementsByClassName("products");
    for (let i = 0; i < products.length; i++) {
      products[i].addEventListener("click", () => {
        location.pathname = "/product-configuration";
      })
    }
  });

  document.getElementById("button-product").addEventListener("click", (e) => {
    ajaxGET("/shop-configuration-button?format=product", function(data) {
      document.querySelector("main").innerHTML = data;
      let products = document.getElementsByClassName("products");
      for (let i = 0; i < products.length; i++) {
        products[i].addEventListener("click", () => {
          location.pathname = "/product-configuration";
        })
      }
    })
  });

  document.getElementById("button-order").addEventListener("click", (e) => {
    ajaxGET("/shop-configuration-button?format=order", function(data) {
      document.querySelector("main").innerHTML = data;
    });
  });

  document.getElementById("button-design").addEventListener("click", (e) => {
    ajaxGET("/shop-configuration-button?format=design", function(data) {
      document.querySelector("main").innerHTML = data;
    });
  });

  document.getElementById("button-setting").addEventListener("click", (e) => {
    ajaxGET("/shop-configuration-button?format=setting", function(data) {
      document.querySelector("main").innerHTML = data;
    });
  });
});

// process the callback function
function ready(callback) {
  if (document.readyState != "loading") {
    callback();
    console.log("ready state is 'complete'");
  } else {
    document.addEventListener("DOMContentLoaded", callback);
    console.log("Listener was invoked");
  }
}