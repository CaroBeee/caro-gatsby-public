document.addEventListener("DOMContentLoaded", () => {

  "use strict";

   // hide loader once site is loaded
  // $(".loader-wrapper").fadeOut("slow");
   document.querySelector(".loader-wrapper").classList.add('fade');


  //Sal.js Scroll Animation
  sal();

  //ScrollSpy
 /*  var spy = new ScrollSpy({
    contexts_class: 'scrollspy'
});

spy.Indicator({
  element: document.getElementById('indicator'),
  indicator_item_class: 'page-scroll'
});
 */

  //MOBILE NAV HAMBURGER MENU

/*   // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        console.log("Burger Menu clicked");

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
 */
  //SKILL-BAR

  document.querySelectorAll("#skills .skill-bar").forEach(function($el) {
    var width = $el.dataset.width;
    $el.classList.add("skill-bar-" + width);
    $el.style.cssText = "animation-name: slideInLeft";

    var skilltip = document.createElement("span");
    skilltip.classList.add("skill-tip");
    skilltip.textContent = width + "%";
    $el.appendChild(skilltip);
  });

  //SKILL-DOTS
 

  document.querySelectorAll("#skill-dots .skill").forEach(function($el) {
    var eleChild = $el.childNodes;
    var j;
    for (i = 0, j = eleChild.length; i < j; i++) {
      if (eleChild[i].className == "skill-progress") {
        console.log(eleChild[i]);
        var score = eleChild[i].dataset.score;
        var progress = eleChild[i];
        var html = "";

        for (var i = 0; i < score; i++) {
          html += "<i class='fa active wow'></i>";
        }
        for (var i = score; i < 10; i++) {
          html += "<i class='fa wow'></i>";
        }
        progress.innerHTML = html;
      }
    }
  });


  // Modals
  var rootEl = document.documentElement;
  var $modals = getAll(".modal");
  var $modalButtons = getAll(".modal-button");
  var $modalCloses = getAll(
    ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
  );

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function($el) {
      $el.addEventListener("click", function() {
        var target = $el.dataset.target;
        console.log("Target of el:" + target);
        var $target = document.getElementById(target);
        rootEl.classList.add("is-clipped");
        $target.classList.add("is-active");
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function($el) {
      $el.addEventListener("click", function() {
        closeModals();
      });
    });
  }

  document.addEventListener("keydown", function(event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
  });

  function closeModals() {
    rootEl.classList.remove("is-clipped");
    $modals.forEach(function($el) {
      $el.classList.remove("is-active");
    });
  }

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});

  //JS Default Scrolling Function
  function smoothScroll(id) {
    document.querySelector("#" + id).scrollIntoView({
      behavior: "smooth"
    });
  }

document.addEventListener(
  "click",
  function(event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches(".page-scroll")) return;

    // Don't follow the link
    event.preventDefault();

    var id = event.target.children[0].text;

    smoothScroll(id);
  },
  false
);

//ISOTOPE

// init Isotope Vanilla JS Version
var iso = new Isotope(".gallery", {
  itemSelector: ".item",

  filter: "*",
  animationOptions: {
    duration: 750,
    easing: "linear",
    queue: false
  },
  masonry: {
    gutter: 20,
    itemSelector: ".item",
    columnWidth: 4
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function(itemElem) {
    var number = itemElem.querySelector(".number").textContent;
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function(itemElem) {
    var name = itemElem.querySelector(".name").textContent;
    return name.match(/ium$/);
  }
};

// bind filter button click
var filtersElem = document.querySelector(".buttons");
filtersElem.addEventListener("click", function(event) {
  // only work with buttons
  if (!matchesSelector(event.target, "button")) {
    return;
  }
  var filterValue = event.target.getAttribute("data-filter");
  // use matching filter function
  filterValue = filterFns[filterValue] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll(".buttons");
for (var i = 0, len = buttonGroups.length; i < len; i++) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener("click", function(event) {
    // only work with buttons
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
    event.target.classList.add("is-checked");
  });
}

