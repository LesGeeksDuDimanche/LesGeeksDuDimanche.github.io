
jQuery(document).ready(function($) {


  var orderByDate = function(data) {

    function custom_sort(a, b) {
      return new Date(a.local_date).getTime() - new Date(b.local_date).getTime();
    }

    data.sort(custom_sort);

    return data;



  };



  var sigId = "134328332";

  var sigApp = "383034f4aa2a3ab297bfcac0745f0adbad6fd5b0";
  var nameApp = "Lyon-Beginners-Apprendre-a-coder-ensemble";

  var sigBri = "7f7bb2739999de8ea96299a0796989080f49a627";
  var nameBri = "Design-et-technologie-pour-projets-citoyens";


  var createApi = function(sigId, sig, urlName) {
    return "https://api.meetup.com/"+urlName+"/events?photo-host=public&page=20&sig_id="+sigId+"&sig="+sig;
  };

  var apiBri = createApi(sigId, sigBri, nameBri);
  var apiApp = createApi(sigId, sigApp, nameApp);


  var html_content = "";
  var preecoleEvent = false;

  var addEvents = function(api, callback) {

    $.ajax({
      url: api, // Function to call on success
      success: function (data) {

        callback(data);

      },
      dataType: 'jsonp'


    });

  };

  addEvents(apiBri, function(briData) {
    addEvents(apiApp, function(ACEData) {

      var data = briData.data.concat(ACEData.data);

      var values = orderByDate(data);

      var imgLink = "";

      var html_img = "";
      var html_content_top = "";
      var html_content_bot = "";


      for (var i = 0; i < values.length; i++) {

        if (!values[i]) {
          continue;
        }

        if (-1 === values[i].name.toLowerCase().search("préécole") ) {
          continue;
        }

        preecoleEvent = true;

        imgLink = /src\s*=\s*"(.+?)"/g.exec(values[i].description);


        html_content_top = "";
        html_img = "";
        html_content_bot = "";

        html_content_top +=
          "<div class=\"project_container\" >" +
          "<span>" + new Date(values[i].local_date).toDateString() + " - " + values[i].local_time + "</span>" +
          "<div class=\"project\">" +
          "<div class=\"title\">" +
          "<h5>" + values[i].name + "</h5>" +
          "</div>" +
          "<hr>" +
          "<div class=\"project_text\" >";
        //     "<div title=\"Ajouter au calendrier\" style=\"padding-left:15px\" class=\"addeventatc\">"+
        //       "<span>" + values[i].local_date + " - " + values[i].local_time + "</span> <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>"+
        //       "<span class=\"start\">11/29/2017 08:00 AM</span>"+
        //       "<span class=\"end\">11/29/2017 10:00 AM</span>"+
        //       "<span class=\"timezone\">America/Los_Angeles"+
        //         "</span>"+
        //         "<span class=\"title\">Summary of the event</span>"+
        //       "<span class=\"description\">Description of the event</span>"+
        //       "<span class=\"location\">Location of the event</span>"+
        //   "</div>"+

        // if (imgLink && imgLink[1]) {
        //
        //   imgLink[1] = imgLink[1].replace(/ /g, "+");
        //
        //   html_img +=
        //     "<div class=\"center\">" +
        //     "<img max-height=\"200\" width=\"100\" src=\"" + imgLink[1] + "\">" +
        //     "</div>";
        //
        // }


        if (values[i].venue) {
          html_content_bot +=
            "<a target=\"_blank\" href=\"https://www.google.com/maps/search/?api=1&query=" + values[i].venue.address_1 + "+" + values[i].venue.city + "\" >" +
            values[i].venue.name + "<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>" +
            "</a>";
        }

        html_content_bot +=
          "<a class=\"btn-link\" target=\"_blank\" href=\"" + values[i].link + "\">" +
          "<span>Inscription</span>" +
          "</a>" +
          "</div>" +
          "</div>" +
          "</div>";


        html_content += html_content_top + html_img + html_content_bot;
      }

      $("#events_container").html(html_content);

      if (preecoleEvent) {
        $("#prochaines-dates").show();
      }



    });





  });

  $(".cal a").click(function (e) {
    e.preventDefault();
  });

});
