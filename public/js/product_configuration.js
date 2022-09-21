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

  document.getElementById("back").addEventListener("click", (e) => {
    location.pathname = "/shop-configuration";
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