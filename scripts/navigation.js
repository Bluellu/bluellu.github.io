'use strict';

/* Mobile navigation toggle */
function displayNav() {
  var nav = document.getElementById("mobile-navlist");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

/**
 * @type {object} navigation
 */


var navigation = navigation || {};

navigation.ITEMS = { // Name : file
  'About': 'index',
  'Games': 'games',
  'Projects': 'projects',
  'Art': 'other',
  'Resume': 'resume'
};

navigation.ITEMSFR = { // Name : file
  'About' : 'Introdution',
  'Games' : 'Jeux',
  'Projects': 'Projets',
  'Art' : 'Art',
  'Resume':'CV'
};

navigation.LANGS = { // Name : path
  'EN': '',
  'FR': 'fr/'
};

/**
 * Create navigation menus and insert them into page
 */
navigation.insertNav = function () {
  let ul = $('<ul></ul>').attr('id', 'navlist');
  let ul2 = $('<ul></ul>').attr('id', 'mobile-navlist');
  let ul3 = $('<ul></ul>').attr('id', 'languagenav');

  // Highlight button for the current page
  let path = window.location.pathname;
  var page;
  var pageback = "";

  let french = false;
  if (path == "/" || path == "") {
    page = "index";
    pageback = "";
  } else {

    let parts = path.split("/");
    let lastpart = parts.pop();
    page = (lastpart.split('.'))[0];

    if (page == '' || page == null) {
      page == "index";
    }

    let url = parts.pop();

    if (url == "fr") {
      pageback = "../";
      french = true;
    }

  }

  for (var i in this.ITEMS) {
    // Create a navigation item for main nav
    var text = french ? this.ITEMSFR[i] : i;
    let li = $('<li id="' + this.ITEMS[i] + '"><a href="' + this.ITEMS[i] + '.html">' + text + '</a></li>');
    li.addClass('deactivated');
    ul.append(li);

    // Create a navigation item for mobile nav
    let li2 = $('<li id=m-' + this.ITEMS[i] + '><hr><a href="' + this.ITEMS[i] + '.html">' + text + '</a></li>');
    li2.addClass('m-deactivated');
    ul2.append(li2);

    $('#main-nav').append(ul);
    $('#mobile-menu').append(ul2);
  }


  for (var i in this.LANGS) {
    var link = pageback + this.LANGS[i] + page;

    // Create a navigation item for language nav
    let li = $('<li id=l-' + i + '><a href="' + link + '.html">' + i + '</a></li>');
    li.addClass('l-deactivated');
    ul3.append(li);
    $('#lang-nav').append(ul3);
  }

  // Highlight button for the current page
  $('#' + page).removeClass('deactivated').addClass('activated');
  $('#m-' + page).removeClass('m-deactivated').addClass('m-activated');
  if (pageback == "../") {
    $('#l-FR').removeClass('l-deactivated').addClass('l-activated');
  } else {
    $('#l-EN').removeClass('l-deactivated').addClass('l-activated');

  }

};

navigation.showMenu = function () {
  var menu = document.getElementById("main-nav");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Init function
navigation.init = function () {
  this.insertNav();
};

// Initializing
$(document).ready(function () {
  navigation.init();
});
