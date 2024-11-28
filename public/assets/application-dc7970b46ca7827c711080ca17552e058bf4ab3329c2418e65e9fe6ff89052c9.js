// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import '@doabit/semantic-ui-sass'
import "jquery";

// Import jQuery
import $ from 'jquery';
window.$ = $;

document.addEventListener('turbo:load', () => {
    $('.ui.dropdown').dropdown();
});

