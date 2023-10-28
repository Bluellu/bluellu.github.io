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
    'About' : 'index', 
    'Games' : 'games', 
    'Projects' : 'projects',
    'Art' : 'other',
	  'Resume' : 'resume'
};

navigation.LANGS = { // Name : path
  'EN' : '',
  'FR' : 'fr/'   
};

/**
 * Create navigation menus and insert them into page
 */
navigation.insertNav = function() {
    let ul = $('<ul></ul>').attr('id', 'navlist');
    let ul2 = $('<ul></ul>').attr('id', 'mobile-navlist');
    let ul3 = $('<ul></ul>').attr('id', 'languagenav');

    for (var i in this.ITEMS) {
        // Create a navigation item for main nav
        let li = $('<li id="' + this.ITEMS[i]+ '"><a href="' + this.ITEMS[i] + '.html">'+ i + '</a></li>');
        li.addClass('deactivated');
        ul.append(li);

        // Create a navigation item for mobile nav
        let li2 = $('<li id=m-' + this.ITEMS[i]+ '><hr><a href="' + this.ITEMS[i] + '.html">'+ i + '</a></li>');
        li2.addClass('m-deactivated');
        ul2.append(li2); 

        $('#main-nav').append(ul);        
        $('#mobile-menu').append(ul2);
    }

        // Highlight button for the current page
        let path = window.location.pathname;  
        let parts = path.split("/");
        
        let lastpart = parts.pop();
        var page;
        let pageback = "";
        if (lastpart == "bluellu.github.io") {
          page = "index";
        }
        else {
          page = (lastpart.split('.'))[0];
          let url = parts.pop();
            if (url != "bluellu.github.io") {
            pageback = "../"
        }
      }
    for (var i in this.LANGS) {
              var link = pageback + this.LANGS[i] + page;

              // Create a navigation item for language nav
              let li = $('<li id=l-' + i + '><a href="' + link + '.html">'+ i + '</a></li>');
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
