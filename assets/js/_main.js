/*! Plugin options and other jQuery stuff */

// Responsive Nav
var navigation = responsiveNav("#site-nav", { // Selector: The ID of the wrapper
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 200, // Integer: Speed of the transition, in milliseconds
  label: "<i class='fa fa-bars'></i> Menu", // String: Label for the navigation toggle
  insert: "before", // String: Insert the toggle before or after the navigation
  customToggle: "", // Selector: Specify the ID of a custom toggle
  openPos: "relative", // String: Position of the opened nav, relative or static
  jsClass: "js", // String: 'JS enabled' class which is added to <html> el
  init: function(){}, // Function: Init callback
  open: function(){}, // Function: Open callback
  close: function(){} // Function: Close callback
});

$('html').click(function() {
  //Hide the menus if visible
  if ($(navigation.wrapper).hasClass('opened')) {
  	navigation.toggle();
  }
});

$('#site-nav').click(function(event){
    event.stopPropagation();
});

// FitVids options
$(function() {
	$("article").fitVids();
});

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// Magnific-Popup options
$(document).ready(function() {
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });

  function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
    return a;

  }

  // ELLIPSIS

  //
  // var x = function(a, i) {
  //   return a.slice(0, i).join(' ');
  // };
  //
  // /**
  //  * requires element to be width/height limited
  //  * element must be in the DOM and can't be with display none, put it with visibility hidden instead
  //  * element shall have no sub elements either O:)
  //  */
  // var ellipsisFill = function(e) {
  //   var d = '...',
  //     h = e.offsetHeight,
  //     w = e.innerHTML.split(' '),
  //     i = 0,
  //     l = w.length;
  //   e.innerHTML = '';
  //   while (h >= e.scrollHeight && i <= l) {
  //     e.innerHTML = x(w, ++i) + d;
  //   }
  //   if (i > l) { e.innerHTML = x(w,   i);     }
  //   else {       e.innerHTML = x(w, --i) + d; }
  // };
  //
  //
  // var el = document.querySelector('#schools_container p');
  // ellipsisFill(el);
  //





});


//
//
// $(document).ready(function($) {
//
//
// });
//
