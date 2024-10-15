function includeHTML() {
  var elements = document.querySelectorAll("[data-include]");

  elements.forEach(function (el) {
    var file = el.getAttribute("data-include");

    if (file) {
      // Create an XMLHttpRequest object
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          el.innerHTML = xhr.responseText;
        }
        if (xhr.readyState == 4 && xhr.status == 404) {
          el.innerHTML = "Content not found.";
        }
      };
      xhr.open("GET", file, true);
      xhr.send();
    }
  });
}

// Load the components once the window is fully loaded
window.onload = includeHTML;
