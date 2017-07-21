//------------------------------------------------------------------------
//								PRELOADER SCRIPT
//------------------------------------------------------------------------
$(window).load(function () { // makes sure the whole site is loaded

  'use strict'

  $('#preloader').delay(400).fadeOut('slow') // will fade out the white DIV that covers the website.
  $('.clock').fadeOut() // will first fade out the loading animation

})

$(document).ready(function () {

  'use strict'

//------------------------------------------------------------------------
//						INTRO SUPERSLIDER SETTINGS
//------------------------------------------------------------------------
  $('#slides').superslides({
    play: 8000, //Milliseconds before progressing to next slide automatically. Use a falsey value to disable.
    animation: 'fade', //slide or fade. This matches animations defined by fx engine.
    pagination: false, //Generate pagination. Add an id to your slide to use custom pagination on that slide.
    inherit_height_from: '#intro' // Accepts window or element selector. Use to constrain slider to an element's height.

    // more options: https://github.com/nicinabox/superslides
  })
})
