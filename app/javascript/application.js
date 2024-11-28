// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import '@doabit/semantic-ui-sass'
import "jquery";
import "semantic-ui-css/semantic.min.js";

// Import jQuery
import * as jQuery from "jquery"; // Import jQuery
window.$ = window.jQuery = jQuery; // Assign jQuery to the global scope

import "semantic-ui-css/semantic.min.js"; // Import Semantic UI JavaScript

document.addEventListener('turbo:load', () => {
    console.log("Turbo loaded");
    console.log(jQuery); // Debug jQuery initialization
    $('.ui.dropdown').dropdown(); // Initialize Semantic UI dropdown
});

