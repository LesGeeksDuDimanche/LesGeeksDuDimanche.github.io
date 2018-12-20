---
title: Les écoles du numérique
layout: embed
excerpt: Comment s'y retrouver parmis tout ces choix !
modified: 2017-06-08 23:44:38.564000000 Z
image:
  feature: 
  nologo: true
  credit: 
  creditlink: 
---

<h3 style="text-align: center">Où apprendre intensivement à coder ?</h3>
<p style="text-align: center"><i> Recensement non exhaustif, ordre alphabétique </i></p>


<!--

<div id="ecolesdunumerique">
  <div id="schools_container"></div>
</div>

-->


<iframe class="airtable-embed" src="https://airtable.com/embed/shrVRDtG3sS9JuA7F?backgroundColor=green&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="720" style="background: transparent; border: 1px solid #ccc;"></iframe>

<p style="text-align: center; padding: 5%;">
Une information est incomplète, votre organisme de formation n'est pas présent sur la liste ? <br> Contactez-nous :)
</p>

<script>

// Ecolesdunumerique

  var sheetId = "1i7rXMEFQT217jHbrTpdJY3ky0mnXZip9IdA4eVouSxM";
  var apiKey = "AIzaSyDHTKK0HTffzWftN-ApDsRfkEC3dFFYb7o";
  var api = "https://content-sheets.googleapis.com/v4/spreadsheets/"+sheetId+"/values/A1:Z100?key="+apiKey;

  $.getJSON(api, function(data) {


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




  });

</script>