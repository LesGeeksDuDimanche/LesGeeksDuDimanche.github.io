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

// Ecolesdunumerique

  var sheetId = "1i7rXMEFQT217jHbrTpdJY3ky0mnXZip9IdA4eVouSxM";
  var apiKey = "AIzaSyDHTKK0HTffzWftN-ApDsRfkEC3dFFYb7o";
  var api = "https://content-sheets.googleapis.com/v4/spreadsheets/"+sheetId+"/values/A1:Z100?key="+apiKey;

  $.getJSON(api, function(data) {

    console.log(data);
    var values = data.values;

    var imgId = 0;

    var ids = {
      title: 0 ,
      description: 1,
      detailedDescription: 2,
      requirements: 3,
      conditions: 4,
      finance: 5,
      duration: 6,
      location: 7,
      langages: 8,
      city: 9,
      logo: 10,
      website: 11
    };

    var information = [
      "requirements",
      "conditions",
      "finance",
      "duration",
      "location"
    ];

    var translations = {
      requirements: "Prérequis",
      conditions: "Conditions",
      finance: "Financement et coût",
      duration: "Durée",
      location: "Localisation"
    };


    var socials = [
      {
        id: 17,
        name: "envelope",
        title: "Cliquez moi pour me copier !"
      },
      {
        id: 12,
        name: "facebook",
        title: "facebook"
      },{
        id: 13,
        name: "twitter",
        title: "twitter"
      },{
        id: 14,
        name: "github",
        title: "github"
      },{
        id: 15,
        name: "meetup",
        title: "meetup"
      },{
        id: 16,
        name: "slack",
        title: "slack"
      }

    ];


    var html_content = "";


    values.shift();
    values = shuffle(values);

    for (var i = 0; i < values.length; i++) {

      if(!values[i][ids.title]) {
        break;
      }

      imgId = 0;


      if( values[i][ids.logo] ) {
        imgId = values[i][ids.logo].substr(33);
      }

      var imageLink = "https://drive.google.com/uc?export=view&id="+imgId;


      html_content +=
        "<div class=\"project_container\">"+
          "<div class=\"project\">";

      var description = values[i][ids.description];

      if (values[i][ids.detailedDescription]) {
        description += " " + values[i][ids.detailedDescription];
      }

      html_content +=
            "<div class=\"project_text\" >"+
                "<div class=\"project_title\">"+
                  "<h2>"+values[i][ids.title]+"</h2>"+
                "</div>"+
                "<hr>"+
                "<div class=\"project_description\">"+
                  "<p>"+description+"</p>"+
                  "<div class=\"hideLongDescription\"></div>"+
                "</div>"+
            "</div>";


      if (imgId !== 0) {
        html_content +=
                "<div class=\"center\">"+
                 "<img max-height=\"100\" width=\"100\" src=\""+imageLink+"\" onerror=\"this.style.display='none'\">"+
               "</div>";
      }

      html_content +=
             "<div class=\"website center\">";


      if(values[i][ids.website]) {
        html_content += "<a target=\"_blank\" href=\""+values[i][ids.website]+"\">"+
          "Site Web"+
          "</a>";
      }
      html_content += "</div>";


      html_content +=
                   "<div class=\"information\">"+
                      "<ul>";

      for(var k=0; k<information.length; k++) {
        if (values[i][ids[information[k]]]) {
          html_content += "<li><p>"+
            "<span>"+translations[information[k]]+" : </span>"+values[i][ids[information[k]]]+
            "</p></li>";
        }
      }



      html_content += "</ul></div>";
      html_content += "<div class=\"socialNetworks\">";
      for (var j = 0; j < socials.length; j++) {
        if(values[i][socials[j].id]) {
          html_content += "<div class=\""+socials[j].name+"\" >"+
            "<a title=\""+socials[j].title+"\"  target=\"_blank\" href=\""+values[i][socials[j].id]+"\">"+
            "<i class=\"fa fa-"+socials[j].name+"\" aria-hidden=\"true\"></i>"+
            "</a>"+
            "</div>";
        }
      }

      html_content += "</div>";

      html_content += "</div>"+
        "</div>";


    }

    $("#schools_container").html(html_content);

    $(".envelope a").click(function(e){
      e.preventDefault();
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(this).attr("href")).select();
      document.execCommand("copy");
      $temp.remove();
    });

    // $(".hideLongDescription").hover(function() {
    //     console.log("hovering")
    //     $(this).parent().find(".project_description p").addClass("shouldAllp");
    // });
    // $(".project_description p").hover( function() {
    //   console.log("looking for stuf", $(this).parent().parent().parent().find(".hideLongDescription"));
    //
    //   $(this).parent().parent().parent().find(".hideLongDescription").css("opacity", 0);
    // }, function() {
    //   $(this).parent().parent().parent().find(".hideLongDescription").css("opacity", 1);
    // })


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
