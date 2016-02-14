---
layout: page
title: Les Projets
excerpt: "Du code, de l'Open Source, du Design, posay"
modified: 2015-07-24T19:44:38.564948-04:00
image:
  feature:
  credit:
  creditlink:
---



{% for project in site.data.projects %} 

###    [{{project.name}}]({{ project.url }})
![{{ project.name }}]({{ site.url }}/images/{{ project.avatar }})

_{{project.description}}_ 


{% endfor %}


