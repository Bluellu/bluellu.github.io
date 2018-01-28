'use strict';

/**
 * @type {object} navigation
 */
var navigation = navigation || {};

navigation.ITEMS = { // Name : file
    'Home' : 'home', 
    'Games' : 'games', 
    'Projects' : 'projects',
    'Resume' : 'resume',
    'Other' : 'other' 
};

/**
 * Create main navigation menu and insert it into page
 */
navigation.insertNav = function() {
    let ul = $('<ul></ul>');

    for (var i in this.ITEMS) {
        // Create a navigation item
        let li = $('<li id="' + this.ITEMS[i]+ '"><a href="' + this.ITEMS[i] + '.html">'+ i + '</a></li>');
        li.addClass('deactivated');
        ul.append(li); 
        $('#main-nav').append(ul);
    }

    // Highlight button for the current page
    let path = window.location.pathname;  
    let page = ((path.split("/").pop()).split('.'))[0];
    $('#' + page).removeClass('deactivated').addClass('activated');
    
};

// Init function
navigation.init = function() {
    this.insertNav();
};

// Initializing
$(document).ready(function() {
    navigation.init();
});
