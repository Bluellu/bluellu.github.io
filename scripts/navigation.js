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
    'Home' : 'index', 
    'Games' : 'games', 
    'Projects' : 'projects',
    'Art' : 'other',
	'Resume' : 'resume'
};

/**
 * Create navigation menus and insert them into page
 */
navigation.insertNav = function() {
    let ul = $('<ul></ul>').attr('id', 'navlist');
    let ul2 = $('<ul></ul>').attr('id', 'mobile-navlist');

    for (var i in this.ITEMS) {
        // Create a navigation item for main nav
        let li = $('<li id="' + this.ITEMS[i]+ '"><a href="' + this.ITEMS[i] + '.html">'+ i + '</a></li>');
        li.addClass('deactivated');
        ul.append(li);

        // Create a navigation item for mobile nav
        let li2 = $('<li id=m-"' + this.ITEMS[i]+ '"><a href="' + this.ITEMS[i] + '.html">'+ i + '</a></li>');
        li.addClass('deactivated');
        ul2.append(li2); 

        $('#main-nav').append(ul);        
        $('#mobile-menu').append(ul2);
    }

    // Highlight button for the current page
    let path = window.location.pathname;  
    let page = ((path.split("/").pop()).split('.'))[0];
    $('#' + page).removeClass('deactivated').addClass('activated');   
};

navigation.showMenu = function() {
  var menu = document.getElementById("main-nav");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Init function
navigation.init = function() {
    this.insertNav();
};

// Initializing
$(document).ready(function() {
    navigation.init();
});
