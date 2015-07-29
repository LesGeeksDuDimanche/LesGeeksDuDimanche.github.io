---
layout: page
title: Les Geeks
excerpt: "Les geeks du dimanche, c'est comme à la maison"
modified: 2015-07-24T19:44:38.564948-04:00
image:
  feature:
  credit:
  creditlink:
---



{% for member in site.data.members %} 
###{{ member.name }}
<img src="{{ site.url }}/images/{{ member.avatar }}" class="bio-photo center" alt="{{ member.name }} bio photo">
_{{ member.bio }}_

{% endfor %}


