(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector("nav.primary");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.primary a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href) return;
    if (href === here || (here === "" && href === "index.html")) {
      a.classList.add("is-active");
    }
  });
})();
