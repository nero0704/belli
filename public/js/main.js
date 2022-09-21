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

  document.addEventListener("scroll", (e) => {
    e.preventDefault();
    var topBanner = document.querySelector("#top-menu .main-banner");
    var bottomBanner = document.querySelector("#bottom-menu .main-banner");
    var topBannerImg = document.querySelector("#top-menu .main-banner img");
    var bottomBannerImg = document.querySelector("#bottom-menu .main-banner img");

    var windowHeight = window.innerHeight;
    var topBannerTop = topBanner.getBoundingClientRect().top;
    var bottomBannerTop = bottomBanner.getBoundingClientRect().bottom - windowHeight;

    var elementHeight = 300;
    var elementWidth = window.innerWidth * 0.75;

    var topBannerMargin = (0.95 >= -topBannerTop / elementHeight ? -topBannerTop / elementHeight : 0.95);
    var bottomBannerMargin = (0.95 >= bottomBannerTop / elementHeight ? bottomBannerTop / elementHeight : 0.95);

    console.log((bottomBannerMargin));
    topBannerImg.style.marginLeft = topBannerMargin * elementWidth + "px";
    bottomBannerImg.style.marginLeft = -bottomBannerMargin * elementWidth + "px";
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