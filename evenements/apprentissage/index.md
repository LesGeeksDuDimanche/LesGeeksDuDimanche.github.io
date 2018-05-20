---
title: Calendrier de l'Apprentissage Gratuit
layout: colearncalendar
excerpt: 
modified: 
image:
  feature: 
  credit: 
  creditlink: 
---

  {% for days in site.data.events %}


<h1 class="eventDay">{{days.day}}  <span class="eventDate" > {{days.date}}</span> </h1>



 <div class="calendarContainer" >


    {% for event in days.events %}

      <div class="divJustToMakeItFlex">
        <p class="eventTime"> {{event.time}} </p>
        <div class="eventCalendar" style="background-image: url('/images/{{ event.img }}');">
          <div class="eventCalendarFilter" >
                <a class="eventLink" href="{{event.link}}">
                  <div class="eventContainer">
                        <h2 class="eventTitle"> {{event.title}} </h2>
                        <p class="eventPlace"> {{event.location}} </p>
                  </div>
                </a>
          </div>
        </div>
      </div>

    {% endfor %}

 </div>

{% endfor %}
