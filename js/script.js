$(function() {
  $(".menu-link").click(function() {
      $(".menu-link").removeClass("is-active");
      $(this).addClass("is-active");
  });
});

$(function() {
  $(".main-header-link").click(function() {
      $(".main-header-link").removeClass("is-active");
      $(this).addClass("is-active");
  });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdowns.forEach((c) => c.classList.remove("is-active"));
      dropdown.classList.add("is-active");
  });
});

$(".search-bar input")
  .focus(function() {
      $(".header").addClass("wide");
  })
  .blur(function() {
      $(".header").removeClass("wide");
  });

$(document).click(function(e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
      dd.removeClass("is-active");
  }
});

$(function() {
  $(".dropdown").on("click", function(e) {
      $(".content-wrapper").addClass("overlay");
      e.stopPropagation();
  });
  $(document).on("click", function(e) {
      if ($(e.target).is(".dropdown") === false) {
          $(".content-wrapper").removeClass("overlay");
      }
  });
});

$(function() {
        // ce truc la met un effet de blut bleu sur un onclick (bouton rejoindre des reseaux)
  // $(".status-button:not(.open)").on("click", function(e) {
  //     $(".overlay-app").addClass("is-active");
  // });
  $(".pop-up .close").click(function() {
      $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button:not(.open)").click(function() {
  $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function() {
  $(".pop-up").removeClass("visible");
});

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  });

var divs = ["section1", "section2", "section3", "section4", "section5", "section6", "section7", "section8", "section9", "section10", "section11"];
var visibleId = null;

function AfficherSection(id) {
  if (visibleId !== id) {
      visibleId = id;
  }
  hide();
}
function hide() {
  var div, i, id;
  for (i = 0; i < divs.length; i++) {
      id = divs[i];
      div = document.getElementById(id);
      if (visibleId === id) {
          div.style.display = "block";
      } else {
          div.style.display = "none";
      }
  }
}

function showMessage(message) {
  var messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.style.display = "block";
}


    // Constantes
  const section13 = document.getElementById("section13");
  const section12 = document.getElementById("section12");
  const darklight = document.getElementById("darklight");
  const showfs = document.getElementById("showfs");
  const exitfs = document.getElementById("exitfs");
  const header2 = document.getElementById("header2");

    // Boutton rouge | Exit button
  function hideApp() {
    section13.classList.add("hiden");
    section12.classList.remove("hiden");
    darklight.classList.add("hiden");
    document.body.classList.remove('light-mode');
  }
  function showApp() {
    section13.classList.remove("hiden");
    section12.classList.add("hiden");
    darklight.classList.remove("hiden");
  }
    
    // Boutton Jaune | Full Screen
  function showFullScreen() {
    showfs.classList.add("hiden");
    exitfs.classList.remove("hiden");
  }
  function exitFullScreen() {
    showfs.classList.remove("hiden")
    exitfs.classList.add("hiden");
  }

    // Boutton Vert | Minimize Screen
  function minimize() {
    section13.classList.add("hiden")
    header2.classList.remove("hiden")
    darklight.classList.add("hiden");
  }
  function maximize() {
    section13.classList.remove("hiden")
    header2.classList.add("hiden")
    darklight.classList.remove("hiden");
  }

//   const grebtn = document.getElementById("grebtn");
// grebtn.addEventListener("click", minimize, true)
//   const grebtn2 = document.getElementById("grebtn2");
// grebtn2.addEventListener("click", maximize, true)

document.getElementById("mobileMenuToggle").addEventListener("click", function() {
  var menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
});