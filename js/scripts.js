function Move_picture() {
  let stars = document.getElementById("stars");
  let moon = document.getElementById("moon");
  let mountains_behind = document.getElementById("mountains_behind");
  let text = document.getElementById("text");
  let mountains_front = document.getElementById("mountains_front");
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1.05 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 0 + "px";
    text.style.marginRight = value * 4 + "px";
    text.style.marginTop = value * 1.5 + "px";
  });
}
function changeActive(element) {
  var links = document.querySelectorAll("header a");
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  element.classList.add("active");
}

function showDetails(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = 'flex';
  document.body.classList.add('no-scroll');
}

function hideDetails(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = 'none';
  document.body.classList.remove('no-scroll');
}
